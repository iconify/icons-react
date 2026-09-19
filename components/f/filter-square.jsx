import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m74_d7bth.css';
import '../../css/k/ky4ks4bzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m74_d7bth"/><path class="ky4ks4bzv"/>`,
		"fallback": "cil:filter-square",
	});
}

export default Component;
