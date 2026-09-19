import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv6u3ea9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv6u3ea9p"/>`,
		"fallback": "heroicons-outline:building-office-2",
	});
}

export default Component;
