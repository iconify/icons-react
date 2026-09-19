import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apkel7bmh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="apkel7bmh"/>`,
		"fallback": "fluent-mdl2:calculator-multiply",
	});
}

export default Component;
