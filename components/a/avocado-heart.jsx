import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlh1i9b0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlh1i9b0o"/>`,
		"fallback": "noviair-light:avocado-heart",
	});
}

export default Component;
