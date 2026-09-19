import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqq3jn0yy.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqq3jn0yy"/>`,
		"fallback": "fa:assistive-listening-systems",
	});
}

export default Component;
