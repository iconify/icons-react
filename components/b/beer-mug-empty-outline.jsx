import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nprwfihuf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nprwfihuf"/>`,
		"fallback": "flowbite:beer-mug-empty-outline",
	});
}

export default Component;
