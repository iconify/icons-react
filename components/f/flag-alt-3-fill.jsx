import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3w0jnb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3w0jnb9a"/>`,
		"fallback": "si:flag-alt-3-fill",
	});
}

export default Component;
