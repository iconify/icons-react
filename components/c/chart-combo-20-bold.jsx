import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8r44id8f.css';
import '../../css/h/h75qckbmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8r44id8f"/><path class="h75qckbmi"/>`,
		"fallback": "energy-icons:chart-combo-20-bold",
	});
}

export default Component;
