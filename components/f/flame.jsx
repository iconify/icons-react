import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vjaep1dqm.css';
import '../../css/k/klljbqb3p.css';
import '../../css/d/dshwyu8ca.css';
import '../../css/m/mr014pb6e.css';
import '../../css/f/f5x4pnnvg.css';
import '../../css/g/gta7z3byx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vjaep1dqm wm-shadow"/><path class="klljbqb3p"/><path class="dshwyu8ca"/><path class="mr014pb6e"/><path class="f5x4pnnvg"/><path class="gta7z3byx"/></g>`,
		"fallback": "withicons-retro:flame",
	});
}

export default Component;
