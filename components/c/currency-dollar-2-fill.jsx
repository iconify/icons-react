import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzd6rhiup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzd6rhiup"/>`,
		"fallback": "mingcute:currency-dollar-2-fill",
	});
}

export default Component;
