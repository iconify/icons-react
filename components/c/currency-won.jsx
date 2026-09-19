import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw4g2xfsm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw4g2xfsm"/>`,
		"fallback": "carbon:currency-won",
	});
}

export default Component;
