import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fdpi4bb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fdpi4bb8o"/>`,
		"fallback": "iconaut:bread-solid",
	});
}

export default Component;
