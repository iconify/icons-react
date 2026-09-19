import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qps999guh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qps999guh"/>`,
		"fallback": "garden:bold-stroke-12",
	});
}

export default Component;
