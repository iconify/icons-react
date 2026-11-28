import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxhoww8eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxhoww8eu"/>`,
		"fallback": "noviair-light:face-angry",
	});
}

export default Component;
