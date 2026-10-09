import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxo5tubhm.css';
import '../../css/c/cw-sa1-6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxo5tubhm"/><path class="cw-sa1-6a"/>`,
		"fallback": "energy-icons:camera-off-48-bold",
	});
}

export default Component;
