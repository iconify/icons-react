import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs-u0nb8b.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uptmd1bpv.css';
import '../../css/j/j4razejqy.css';
import '../../css/n/n0zdkcb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs-u0nb8b secondary"/><g class="dt0cm9dhy primary"><path class="uptmd1bpv"/><path class="j4razejqy"/><path class="n0zdkcb4w"/></g>`,
		"fallback": "iconaut:bra-duo",
	});
}

export default Component;
