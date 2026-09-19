import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh1e9m4lr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh1e9m4lr"/>`,
		"fallback": "flowbite:clipboard-list-outline",
	});
}

export default Component;
