import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/g/gaaka951g.css';
import '../../css/u/ubhwy-9lp.css';
import '../../css/y/y37m4mbaa.css';
import '../../css/r/r6qgx8bse.css';
import '../../css/z/z2fguqbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="gaaka951g"/><path class="ubhwy-9lp"/><path class="y37m4mbaa"/><path class="r6qgx8bse"/><path class="z2fguqbps"/></g>`,
		"fallback": "withicons-retro:aperture",
	});
}

export default Component;
