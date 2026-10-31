import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z1j7k2dhf.css';
import '../../css/m/m8uj4nbtw.css';
import '../../css/v/v5dnxtbab.css';
import '../../css/h/hs3f4guij.css';
import '../../css/l/l0ypjb6_a.css';
import '../../css/g/gs5pqpbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wm-shadow z1j7k2dhf"/><path class="m8uj4nbtw"/><path class="v5dnxtbab"/><path class="hs3f4guij"/><path class="l0ypjb6_a"/><path class="gs5pqpbbb"/></g>`,
		"fallback": "withicons-retro:help-circle",
	});
}

export default Component;
