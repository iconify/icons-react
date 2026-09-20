import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcks5cuuu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcks5cuuu"/>`,
		"fallback": "streamline-flex:credit-card-approved",
	});
}

export default Component;
