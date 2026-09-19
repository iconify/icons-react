import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mxczrmbzw.css';
import '../../css/h/h0tq43bwq.css';
import '../../css/r/r8paa_b1i.css';
import '../../css/i/ii26z8_fm.css';
import '../../css/k/kkdc8gi8h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mxczrmbzw"/><path class="h0tq43bwq"/><circle transform="rotate(90 34 34)" class="r8paa_b1i"/><path class="ii26z8_fm"/><circle class="kkdc8gi8h"/></g>`,
		"fallback": "icon-park-outline:abnormal",
	});
}

export default Component;
