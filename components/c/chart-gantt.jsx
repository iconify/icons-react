import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-8grfeom.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-8grfeom"/>`,
		"fallback": "fa6-solid:chart-gantt",
	});
}

export default Component;
