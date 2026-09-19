import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nki8t3b7j.css';
import '../../css/q/qhdy6vbit.css';
import '../../css/m/m5luvtbuz.css';
import '../../css/t/tgrin9b-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nki8t3b7j"/><path class="qhdy6vbit"/><path class="m5luvtbuz"/><path class="tgrin9b-f"/></g>`,
		"fallback": "covid:graph-death-rate-decreasing",
	});
}

export default Component;
