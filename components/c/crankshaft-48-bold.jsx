import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w4nxybn5j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w4nxybn5j"/>`,
		"fallback": "energy-icons:crankshaft-48-bold",
	});
}

export default Component;
