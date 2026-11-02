import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gsl6db1of.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gsl6db1of"/>`,
		"fallback": "mingcute:check-fill",
	});
}

export default Component;
