import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1lsw24hs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1lsw24hs"/>`,
		"fallback": "flowbite:credit-card-plus-alt-outline",
	});
}

export default Component;
