import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5xf0acau.css';
import '../../css/k/kf6co47ks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y5xf0acau"/><path class="kf6co47ks"/>`,
		"fallback": "energy-icons:corner-left-down-48",
	});
}

export default Component;
