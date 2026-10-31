import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nh5-ytbod.css';
import '../../css/s/s045mdb9e.css';
import '../../css/q/qj7v9lbcd.css';
import '../../css/o/ols_87btu.css';
import '../../css/k/kg6-vmgwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="nh5-ytbod"/><path class="s045mdb9e wm-shine"/><path class="qj7v9lbcd wm-k"/><path class="ols_87btu wm-a"/><path class="kg6-vmgwc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:heart-balloon",
	});
}

export default Component;
