import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh1cy0bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh1cy0bqc"/>`,
		"fallback": "flowbite:home-outline",
	});
}

export default Component;
