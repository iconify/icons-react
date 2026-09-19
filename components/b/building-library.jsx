import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nk25et9co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nk25et9co"/>`,
		"fallback": "heroicons-outline:building-library",
	});
}

export default Component;
