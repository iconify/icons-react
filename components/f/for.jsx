import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o__i2-bjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o__i2-bjc"/>`,
		"fallback": "token:for",
	});
}

export default Component;
