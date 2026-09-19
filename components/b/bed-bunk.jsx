import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uneu65bby.css';
import '../../css/i/iayp14b3h.css';
import '../../css/f/f3hcruhto.css';
import '../../css/z/z6ev6rbws.css';
import '../../css/k/klzaiwa8a.css';
import '../../css/d/d7n2m7bvj.css';
import '../../css/u/u4ofipz9p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uneu65bby"/><path class="iayp14b3h"/><path class="f3hcruhto"/><path class="z6ev6rbws"/><path class="klzaiwa8a"/><path class="d7n2m7bvj"/><path class="u4ofipz9p"/></g>`,
		"fallback": "glyphs-poly:bed-bunk",
	});
}

export default Component;
