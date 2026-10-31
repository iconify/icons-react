import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/ieficqmxq.css';
import '../../css/k/kwwnp6b_h.css';
import '../../css/k/kk5tymhno.css';
import '../../css/s/sy0e_abrq.css';
import '../../css/g/gq4vx_bqt.css';
import '../../css/k/klzcy0ogc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="ieficqmxq"/><path class="kwwnp6b_h wm-shine"/><path class="kk5tymhno wm-k"/><path class="sy0e_abrq wm-a"/><path class="gq4vx_bqt wm-s"/><path class="klzcy0ogc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:heater",
	});
}

export default Component;
