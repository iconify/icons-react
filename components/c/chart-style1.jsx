import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3mqsdxzt.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3mqsdxzt"/>`,
		"fallback": "iwwa:chart-style1",
	});
}

export default Component;
