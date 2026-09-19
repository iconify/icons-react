import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ustd-of_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ustd-of_o"/>`,
		"fallback": "heroicons-outline:download",
	});
}

export default Component;
