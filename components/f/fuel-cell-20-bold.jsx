import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9fygebyi.css';
import '../../css/p/pw602pb9o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9fygebyi"/><path class="pw602pb9o"/>`,
		"fallback": "energy-icons:fuel-cell-20-bold",
	});
}

export default Component;
