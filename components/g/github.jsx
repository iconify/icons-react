import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4--xkonr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4--xkonr"/>`,
		"fallback": "la:github",
	});
}

export default Component;
