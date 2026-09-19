import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m241b5b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m241b5b6o"/>`,
		"fallback": "heroicons-outline:bolt",
	});
}

export default Component;
