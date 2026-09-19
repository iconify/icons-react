import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tw1okb6_l.css';
import '../../css/b/b33loqboc.css';
import '../../css/y/yu9s21war.css';
import '../../css/j/j002eop6h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tw1okb6_l"/><path class="b33loqboc"/><path class="yu9s21war"/><path class="j002eop6h"/></g>`,
		"fallback": "glyphs:arrow-solid-curve-double-duo",
	});
}

export default Component;
