import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/micyq1blm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="micyq1blm"/>`,
		"fallback": "noviair-light:duck",
	});
}

export default Component;
