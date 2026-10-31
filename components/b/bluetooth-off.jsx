import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/o/ofdkf0hgr.css';
import '../../css/j/jzijgonwu.css';
import '../../css/q/qr4ochb5c.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ofdkf0hgr"/><path class="jzijgonwu wm-k"/><path class="qr4ochb5c wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:bluetooth-off",
	});
}

export default Component;
