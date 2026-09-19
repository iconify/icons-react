import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wpqy0pbmo.css';
import '../../css/a/anezrp_4v.css';
import '../../css/w/w9qsqgbnh.css';
import '../../css/m/mq7666bzl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wpqy0pbmo"/><path class="anezrp_4v"/><path class="w9qsqgbnh"/><path class="mq7666bzl"/></g>`,
		"fallback": "si-glyph:camera-security",
	});
}

export default Component;
