import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkvzy8bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkvzy8bxh"/>`,
		"fallback": "thesvg-color:fauna",
	});
}

export default Component;
