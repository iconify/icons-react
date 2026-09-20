import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipt9fhbmy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipt9fhbmy"/>`,
		"fallback": "la:arrow-down",
	});
}

export default Component;
