import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lso3-hbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lso3-hbgl"/>`,
		"fallback": "mdi-light:chart-areaspline",
	});
}

export default Component;
