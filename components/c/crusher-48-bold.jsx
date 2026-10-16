import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd0ibrbxj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd0ibrbxj"/>`,
		"fallback": "energy-icons:crusher-48-bold",
	});
}

export default Component;
