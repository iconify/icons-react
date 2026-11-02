import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ml6p7i4lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ml6p7i4lo"/>`,
		"fallback": "mingcute:currency-lira-2-line",
	});
}

export default Component;
