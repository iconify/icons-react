import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4mjjratt.css';
import '../../css/g/gi-okmbuc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4mjjratt"/><path class="gi-okmbuc"/>`,
		"fallback": "energy-icons:chart-bar-20-bold",
	});
}

export default Component;
