import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddfy9kbvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddfy9kbvg"/>`,
		"fallback": "withicons:golf-gloss",
	});
}

export default Component;
