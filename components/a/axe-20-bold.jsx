import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn1dkmnqu.css';
import '../../css/t/th0-odbhe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn1dkmnqu"/><path class="th0-odbhe"/>`,
		"fallback": "energy-icons:axe-20-bold",
	});
}

export default Component;
