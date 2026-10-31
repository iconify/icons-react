import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n284bm2ma.css';
import '../../css/b/b3snpszjg.css';
import '../../css/y/yvf_65bxf.css';
import '../../css/i/imec2uboy.css';
import '../../css/v/vndec01ue.css';
import '../../css/c/c69gevchr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n284bm2ma wm-shadow"/><path class="b3snpszjg"/><path class="yvf_65bxf"/><path class="imec2uboy"/><path class="vndec01ue"/><path class="c69gevchr"/></g>`,
		"fallback": "withicons-retro:baby-bottle",
	});
}

export default Component;
