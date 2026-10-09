import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oitekc77l.css';
import '../../css/m/m6f9qoawr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oitekc77l"/><path class="m6f9qoawr"/>`,
		"fallback": "energy-icons:gas-bottle-48",
	});
}

export default Component;
