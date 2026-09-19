import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/el5180gxh.css';
import '../../css/a/adeu0ysnb.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="el5180gxh"/><path class="adeu0ysnb"/></g>`,
		"fallback": "glyphs-poly:grid-sm",
	});
}

export default Component;
