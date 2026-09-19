import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/erdv6n95c.css';
import '../../css/e/ehoaq-urq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="erdv6n95c"/><path class="ehoaq-urq"/></g>`,
		"fallback": "glyphs:bezier-pentagon-bold",
	});
}

export default Component;
