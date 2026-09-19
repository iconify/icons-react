import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oiwn7b8vb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oiwn7b8vb"/>`,
		"fallback": "carbon:distribute-vertical-top",
	});
}

export default Component;
