import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3vuzjkvz.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3vuzjkvz"/>`,
		"fallback": "fa6-solid:arrow-up-long",
	});
}

export default Component;
