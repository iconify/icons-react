import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4i59nbxe.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="l4i59nbxe"/>`,
		"fallback": "garden:circle-full-stroke-12",
	});
}

export default Component;
