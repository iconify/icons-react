import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/errg8-z4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="errg8-z4t"/>`,
		"fallback": "iconaut:credit-card-solid",
	});
}

export default Component;
