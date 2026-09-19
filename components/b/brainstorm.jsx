import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0fx791qe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0fx791qe"/>`,
		"fallback": "carbon:brainstorm",
	});
}

export default Component;
