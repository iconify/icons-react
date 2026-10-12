import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc81pf9ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc81pf9ll"/>`,
		"fallback": "lucide-extended:flag-off-filled",
	});
}

export default Component;
