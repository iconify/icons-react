import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn_2kjoxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn_2kjoxn"/>`,
		"fallback": "lucide-extended:candy-filled",
	});
}

export default Component;
