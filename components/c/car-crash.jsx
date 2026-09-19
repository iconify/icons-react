import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/q7l0kqbag.css';
import '../../css/u/u_e0iuuqc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="q7l0kqbag"/><path class="u_e0iuuqc"/></g>`,
		"fallback": "glyphs:car-crash",
	});
}

export default Component;
