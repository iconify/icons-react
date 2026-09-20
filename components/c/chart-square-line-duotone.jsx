import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wf89k6buf.css';
import '../../css/k/ka2lwnn7w.css';
import '../../css/f/f__nic5ty.css';
import '../../css/t/tzz5dibos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wf89k6buf"/><path class="ka2lwnn7w"/><path class="f__nic5ty"/><path class="tzz5dibos"/></g>`,
		"fallback": "solar:chart-square-line-duotone",
	});
}

export default Component;
