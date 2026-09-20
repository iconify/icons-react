import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-s4vtjqv.css';

const viewBox = {"width":18,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-s4vtjqv"/>`,
		"fallback": "jam:code-sample",
	});
}

export default Component;
