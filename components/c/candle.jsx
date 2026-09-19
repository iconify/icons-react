import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozy9y9bai.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozy9y9bai"/>`,
		"fallback": "dinkie-icons:candle",
	});
}

export default Component;
