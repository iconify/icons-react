import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maw4ikbnh.css';
import '../../css/y/yn4p-lbjx.css';
import '../../css/t/tjhcftl1w.css';
import '../../css/o/osemxebgc.css';
import '../../css/j/jy0yf6bpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maw4ikbnh"/><path class="yn4p-lbjx"/><path class="tjhcftl1w"/><path clip-rule="evenodd" class="osemxebgc"/><path class="jy0yf6bpc"/>`,
		"fallback": "solar:battery-full-minimalistic-outline",
	});
}

export default Component;
