import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqjtt0biw.css';
import '../../css/u/up2-7-ble.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqjtt0biw"/><path class="up2-7-ble"/>`,
		"fallback": "energy-icons:biofuel-48",
	});
}

export default Component;
