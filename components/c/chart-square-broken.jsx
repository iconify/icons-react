import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ka2lwnn7w.css';
import '../../css/f/f__nic5ty.css';
import '../../css/t/tzz5dibos.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ka2lwnn7w"/><path class="f__nic5ty"/><path class="tzz5dibos"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:chart-square-broken",
	});
}

export default Component;
