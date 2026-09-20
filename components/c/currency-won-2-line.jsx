import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by6okx3ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by6okx3ib"/>`,
		"fallback": "mingcute:currency-won-2-line",
	});
}

export default Component;
