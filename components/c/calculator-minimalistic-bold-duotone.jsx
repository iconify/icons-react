import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg928d-qd.css';
import '../../css/n/n-5gl4b1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg928d-qd"/><path clip-rule="evenodd" class="n-5gl4b1d"/>`,
		"fallback": "solar:calculator-minimalistic-bold-duotone",
	});
}

export default Component;
