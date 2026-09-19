import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rr2-x1j7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rr2-x1j7b"/>`,
		"fallback": "iconamoon:comment-light",
	});
}

export default Component;
