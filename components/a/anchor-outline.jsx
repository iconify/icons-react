import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxp6_5wni.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fxp6_5wni"/>`,
		"fallback": "glyphs:anchor-outline",
	});
}

export default Component;
