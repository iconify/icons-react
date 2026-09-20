import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldih8wbar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldih8wbar"/>`,
		"fallback": "mdi-light:image",
	});
}

export default Component;
