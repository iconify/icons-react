import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nu1t95b4d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nu1t95b4d"/>`,
		"fallback": "cib:hulu",
	});
}

export default Component;
