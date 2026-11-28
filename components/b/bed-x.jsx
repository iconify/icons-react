import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjb0yu-2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjb0yu-2m"/>`,
		"fallback": "noviair-light:bed-x",
	});
}

export default Component;
