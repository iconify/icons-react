import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt8m-8zdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt8m-8zdy"/>`,
		"fallback": "mingcute:align-top-line",
	});
}

export default Component;
