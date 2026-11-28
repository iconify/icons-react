import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrp8x2bxx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrp8x2bxx"/>`,
		"fallback": "noviair-light:bowl",
	});
}

export default Component;
