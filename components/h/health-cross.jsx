import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1o7hk86y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1o7hk86y"/>`,
		"fallback": "carbon:health-cross",
	});
}

export default Component;
