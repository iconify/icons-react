import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhb2hvx3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhb2hvx3c"/>`,
		"fallback": "mingcute:currency-dollar-line",
	});
}

export default Component;
