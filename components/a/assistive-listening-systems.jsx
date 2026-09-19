import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km7n7_jaf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km7n7_jaf"/>`,
		"fallback": "fa7-solid:assistive-listening-systems",
	});
}

export default Component;
