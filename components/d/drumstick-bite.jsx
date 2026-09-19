import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98kmzb0p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c98kmzb0p"/>`,
		"fallback": "fa-solid:drumstick-bite",
	});
}

export default Component;
