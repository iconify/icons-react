import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/car149bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="car149bfc"/>`,
		"fallback": "bxs:brightness-half",
	});
}

export default Component;
