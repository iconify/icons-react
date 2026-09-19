import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tk_jupb.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9tk_jupb"/>`,
		"fallback": "fa6-solid:c",
	});
}

export default Component;
