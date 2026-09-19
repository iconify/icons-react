import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhnivs28x.css';

const viewBox = {"width":2304,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhnivs28x"/>`,
		"fallback": "fa:cc-amex",
	});
}

export default Component;
