import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq3q3bfsk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq3q3bfsk"/>`,
		"fallback": "fluent-mdl2:calculator-not-equal-to",
	});
}

export default Component;
