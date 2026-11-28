import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me6qoeb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="me6qoeb1i"/>`,
		"fallback": "iconaut:arrow-left-long-solid",
	});
}

export default Component;
