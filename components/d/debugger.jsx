import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7sr6ubzr.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jaon458pj.css';
import '../../css/c/c7tztfx7u.css';
import '../../css/l/lrj2ovb2v.css';
import '../../css/v/vqdvl_bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7sr6ubzr"/><g class="d2kvgvbvc"><path class="jaon458pj"/><path class="c7tztfx7u"/><path class="lrj2ovb2v"/><path class="vqdvl_bsw"/></g>`,
		"fallback": "gcp:debugger",
	});
}

export default Component;
