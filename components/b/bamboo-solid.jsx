import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h59nr3bch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h59nr3bch"/>`,
		"fallback": "iconaut:bamboo-solid",
	});
}

export default Component;
