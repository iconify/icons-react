import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n48mi5btw.css';
import '../../css/h/h_lmdwnly.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n48mi5btw"/><path class="h_lmdwnly"/></g>`,
		"fallback": "glyphs:arrows-exchange-duo",
	});
}

export default Component;
