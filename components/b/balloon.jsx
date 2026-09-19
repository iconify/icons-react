import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usn41ebrm.css';
import '../../css/y/y32k397vy.css';
import '../../css/o/o80ubpbnf.css';
import '../../css/t/tygb6gbth.css';
import '../../css/a/ag6dkt4od.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="usn41ebrm"/><path class="y32k397vy"/><path class="o80ubpbnf"/><path class="tygb6gbth"/><path class="ag6dkt4od"/></g>`,
		"fallback": "fluent-emoji-flat:balloon",
	});
}

export default Component;
