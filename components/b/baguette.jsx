import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/sfinsjbyo.css';
import '../../css/i/iatecnr8o.css';
import '../../css/w/wevkxlbtt.css';
import '../../css/f/f545reb7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="sfinsjbyo"/><path class="iatecnr8o wm-shine"/><path class="wevkxlbtt wm-k"/><path class="f545reb7b wm-a"/></g>`,
		"fallback": "withicons-kawaii:baguette",
	});
}

export default Component;
