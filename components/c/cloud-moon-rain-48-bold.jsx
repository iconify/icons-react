import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njwg_cbtx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="njwg_cbtx"/>`,
		"fallback": "energy-icons:cloud-moon-rain-48-bold",
	});
}

export default Component;
