import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea9wp1b6i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea9wp1b6i"/>`,
		"fallback": "cib:acm",
	});
}

export default Component;
