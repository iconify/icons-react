import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg9uzw0lp.css';
import '../../css/u/u2p6dmkpb.css';
import '../../css/g/g0dhlfd-h.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qg9uzw0lp"/><path class="u2p6dmkpb"/><path class="g0dhlfd-h"/></g>`,
		"fallback": "cif:ca",
	});
}

export default Component;
