import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8gd2ib8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j8gd2ib8y"/>`,
		"fallback": "solar:donut-outline",
	});
}

export default Component;
