import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yrv7inrvv.css';
import '../../css/n/narnndnoj.css';
import '../../css/k/ky2fcotsb.css';
import '../../css/j/jiq7v7c6n.css';
import '../../css/i/i3cpjbc-j.css';
import '../../css/z/zvihndtld.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yrv7inrvv"/><path class="narnndnoj"/><path class="ky2fcotsb"/><path class="jiq7v7c6n"/><path class="i3cpjbc-j"/><path class="zvihndtld"/></g>`,
		"fallback": "fluent-emoji-flat:dashing-away",
	});
}

export default Component;
