import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/luzrlq7wp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="luzrlq7wp"/>`,
		"fallback": "energy-icons:chart-gantt-20-bold",
	});
}

export default Component;
