import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epi4yab0z.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epi4yab0z"/>`,
		"fallback": "cib:firebase",
	});
}

export default Component;
