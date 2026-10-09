import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxzo85ixz.css';
import '../../css/q/qyem97bcd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxzo85ixz"/><path class="qyem97bcd"/>`,
		"fallback": "energy-icons:golf-48-bold",
	});
}

export default Component;
