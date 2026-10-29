import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/jgczzeg9g.css';
import '../../css/i/i2t4y9fwk.css';
import '../../css/m/mr_z7cbbr.css';
import '../../css/f/f2iz_pbwp.css';
import '../../css/d/d3y9mw6db.css';
import '../../css/n/nenasvbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="jgczzeg9g"/><path class="i2t4y9fwk wm-a"/><path class="mr_z7cbbr wm-a"/><path class="f2iz_pbwp"/><path class="d3y9mw6db"/><path class="nenasvbre wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-curly-duo",
	});
}

export default Component;
