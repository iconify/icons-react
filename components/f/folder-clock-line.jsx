import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwe_sbcat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwe_sbcat"/>`,
		"fallback": "mingcute:folder-clock-line",
	});
}

export default Component;
