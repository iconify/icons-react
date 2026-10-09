import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpeu_j1mo.css';
import '../../css/m/mkzcfdbha.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpeu_j1mo"/><path class="mkzcfdbha"/>`,
		"fallback": "energy-icons:crosshair-48",
	});
}

export default Component;
