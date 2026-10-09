import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_kcw3bme.css';
import '../../css/z/zryj4abdk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_kcw3bme"/><path class="zryj4abdk"/>`,
		"fallback": "energy-icons:boiler-48",
	});
}

export default Component;
