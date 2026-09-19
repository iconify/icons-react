import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kmv0rgb2k.css';
import '../../css/f/fce7at5ak.css';
import '../../css/d/db95n0b-d.css';
import '../../css/o/ohiubkjmj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kmv0rgb2k"/><path class="fce7at5ak"/><path class="db95n0b-d"/><path class="ohiubkjmj"/></g>`,
		"fallback": "glyphs-poly:highlighter",
	});
}

export default Component;
