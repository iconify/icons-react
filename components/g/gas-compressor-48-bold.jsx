import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzxt0mswz.css';
import '../../css/h/htyx_ybsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzxt0mswz"/><path class="htyx_ybsn"/>`,
		"fallback": "energy-icons:gas-compressor-48-bold",
	});
}

export default Component;
