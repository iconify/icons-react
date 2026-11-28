import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar6e3j2qf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar6e3j2qf"/>`,
		"fallback": "noviair-light:cloud-rain",
	});
}

export default Component;
