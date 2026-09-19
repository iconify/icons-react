import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwrfwdtmg.css';
import '../../css/z/z_rnxebux.css';
import '../../css/w/w4gnlobgl.css';
import '../../css/x/xje17hzpr.css';
import '../../css/a/a8_6-8b2y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iwrfwdtmg"/><path class="z_rnxebux"/><path class="w4gnlobgl"/><path class="xje17hzpr"/><path class="a8_6-8b2y"/></g>`,
		"fallback": "fluent-emoji-flat:fearful-face",
	});
}

export default Component;
