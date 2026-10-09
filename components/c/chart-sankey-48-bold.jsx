import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-_cnnjai.css';
import '../../css/q/qi1j3qboz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h-_cnnjai"/><path class="qi1j3qboz"/>`,
		"fallback": "energy-icons:chart-sankey-48-bold",
	});
}

export default Component;
