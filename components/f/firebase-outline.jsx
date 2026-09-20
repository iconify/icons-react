import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx8h4crue.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx8h4crue"/>`,
		"fallback": "teenyicons:firebase-outline",
	});
}

export default Component;
