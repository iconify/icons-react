import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbzdxvbap.css';
import '../../css/k/kc18vwbzr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbzdxvbap"/><path class="kc18vwbzr"/>`,
		"fallback": "energy-icons:hot-air-balloon-48-bold",
	});
}

export default Component;
