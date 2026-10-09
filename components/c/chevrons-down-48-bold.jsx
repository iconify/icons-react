import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-on1cbzr.css';
import '../../css/w/wzs-74bhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-on1cbzr"/><path class="wzs-74bhc"/>`,
		"fallback": "energy-icons:chevrons-down-48-bold",
	});
}

export default Component;
