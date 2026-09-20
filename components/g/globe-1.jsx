import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gglo9oa-c.css';
import '../../css/s/s0e_w85mb.css';
import '../../css/q/qc3iurbac.css';
import '../../css/c/cuy0u581m.css';
import '../../css/u/uk2oj96xr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gglo9oa-c"/><path class="s0e_w85mb"/><path class="qc3iurbac"/><path class="cuy0u581m"/><path class="uk2oj96xr"/></g>`,
		"fallback": "streamline-cyber-color:globe-1",
	});
}

export default Component;
