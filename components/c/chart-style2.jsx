import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sk0zolb2m.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sk0zolb2m"/>`,
		"fallback": "iwwa:chart-style2",
	});
}

export default Component;
