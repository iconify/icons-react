import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8o7esb0b.css';
import '../../css/l/lkctm_bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8o7esb0b"/><path clip-rule="evenodd" class="lkctm_bgi"/>`,
		"fallback": "lucide-extended:egg-fried-filled",
	});
}

export default Component;
