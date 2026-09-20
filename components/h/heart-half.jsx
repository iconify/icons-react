import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzqyp-d2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzqyp-d2c"/>`,
		"fallback": "mdi-light:heart-half",
	});
}

export default Component;
