import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o24kj0b2z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o24kj0b2z"/>`,
		"fallback": "iconaut:chocolate-bar-solid",
	});
}

export default Component;
