import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mosw6vb-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mosw6vb-r"/>`,
		"fallback": "token:dweb",
	});
}

export default Component;
