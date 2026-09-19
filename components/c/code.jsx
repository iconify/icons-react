import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsjl9tp0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsjl9tp0b"/>`,
		"fallback": "heroicons-outline:code",
	});
}

export default Component;
