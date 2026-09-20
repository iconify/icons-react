import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntd2lyfxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntd2lyfxh"/>`,
		"fallback": "simple-icons:edx",
	});
}

export default Component;
