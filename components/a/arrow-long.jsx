import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezxvg4xrw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezxvg4xrw"/>`,
		"fallback": "glyphs:arrow-long",
	});
}

export default Component;
