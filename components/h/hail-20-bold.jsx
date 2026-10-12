import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx_6a7bpx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx_6a7bpx"/>`,
		"fallback": "energy-icons:hail-20-bold",
	});
}

export default Component;
