import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nle824bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nle824bux"/>`,
		"fallback": "heroicons-outline:cash",
	});
}

export default Component;
