import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw607l8ol.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw607l8ol"/>`,
		"fallback": "energy-icons:crown-48",
	});
}

export default Component;
