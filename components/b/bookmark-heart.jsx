import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfk4z3biw.css';
import '../../css/q/qi2aslb4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfk4z3biw"/><path class="qi2aslb4h"/>`,
		"fallback": "boxicons:bookmark-heart",
	});
}

export default Component;
