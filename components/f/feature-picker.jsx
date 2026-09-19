import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su9dnwgms.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su9dnwgms"/>`,
		"fallback": "carbon:feature-picker",
	});
}

export default Component;
