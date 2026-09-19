import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6mstu8gp.css';
import '../../css/p/p2cfd3dxv.css';
import '../../css/p/p61w3pb9j.css';
import '../../css/c/cx98hqbwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s6mstu8gp"><path class="p2cfd3dxv"/><path class="p61w3pb9j"/><path class="cx98hqbwm"/></g>`,
		"fallback": "gcp:cloud-asset-inventory",
	});
}

export default Component;
