import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmkao8b8a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmkao8b8a"/>`,
		"fallback": "heroicons-outline:arrow-left",
	});
}

export default Component;
