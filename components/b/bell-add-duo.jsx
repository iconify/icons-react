import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nlaso0bdo.css';
import '../../css/u/ub71xqbpj.css';
import '../../css/u/utr6ahyvf.css';
import '../../css/m/mm1d9kbpu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nlaso0bdo"/><path class="ub71xqbpj"/><path class="utr6ahyvf"/><path class="mm1d9kbpu"/></g>`,
		"fallback": "glyphs:bell-add-duo",
	});
}

export default Component;
