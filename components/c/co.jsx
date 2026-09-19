import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zzru55bdg.css';
import '../../css/n/n40e-wbrj.css';
import '../../css/i/iw7rusb-e.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zzru55bdg"/><path class="n40e-wbrj"/><path class="iw7rusb-e"/></g>`,
		"fallback": "cif:co",
	});
}

export default Component;
