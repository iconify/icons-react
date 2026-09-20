import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ik_7hmbnr.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ik_7hmbnr"/>`,
		"fallback": "iwwa:chart-style4",
	});
}

export default Component;
