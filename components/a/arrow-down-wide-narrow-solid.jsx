import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g01pj538o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g01pj538o"/>`,
		"fallback": "iconaut:arrow-down-wide-narrow-solid",
	});
}

export default Component;
