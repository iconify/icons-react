import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb8_5bccr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb8_5bccr"/>`,
		"fallback": "teenyicons:distribute-vertical-outline",
	});
}

export default Component;
