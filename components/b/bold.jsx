import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w3x0fkb1d.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w3x0fkb1d"/>`,
		"fallback": "fa-solid:bold",
	});
}

export default Component;
