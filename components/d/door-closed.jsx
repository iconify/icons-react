import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yfkh4bc1s.css';
import '../../css/r/rabduxs0v.css';
import '../../css/t/tssac15xg.css';
import '../../css/m/m52asm4vq.css';
import '../../css/c/crh8rma2c.css';
import '../../css/s/sx9ze7bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k yfkh4bc1s"/><path class="rabduxs0v wm-k"/><path class="tssac15xg wm-k"/><path class="m52asm4vq wm-shadow"/><path class="crh8rma2c wm-shine"/><path class="sx9ze7bqc wm-shine"/></g>`,
		"fallback": "withicons-valentine:door-closed",
	});
}

export default Component;
