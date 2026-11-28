import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oohom20oz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oohom20oz"/>`,
		"fallback": "iconaut:globe-arrow-solid",
	});
}

export default Component;
