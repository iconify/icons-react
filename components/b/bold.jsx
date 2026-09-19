import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hoemicr0i.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hoemicr0i"/>`,
		"fallback": "fontisto:bold",
	});
}

export default Component;
