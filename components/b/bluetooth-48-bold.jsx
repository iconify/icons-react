import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp09m-bto.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp09m-bto"/>`,
		"fallback": "energy-icons:bluetooth-48-bold",
	});
}

export default Component;
