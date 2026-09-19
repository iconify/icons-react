import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcqpgct8o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcqpgct8o"/>`,
		"fallback": "garden:bar-chart-fill-16",
	});
}

export default Component;
