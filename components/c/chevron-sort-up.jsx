import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m7wdrcc7x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m7wdrcc7x"/>`,
		"fallback": "carbon:chevron-sort-up",
	});
}

export default Component;
