import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/k/kx9i9457l.css';
import '../../css/q/q1ehkzblm.css';
import '../../css/n/nx5fowxhe.css';
import '../../css/v/vn8-qxupk.css';
import '../../css/k/kg6-vmgwc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="kx9i9457l"/><path class="q1ehkzblm wm-shine"/><path class="nx5fowxhe wm-k"/><path class="vn8-qxupk wm-a"/><path class="kg6-vmgwc wm-deco"/></g>`,
		"fallback": "withicons-kawaii:alpana",
	});
}

export default Component;
