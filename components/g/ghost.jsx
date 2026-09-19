import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfpjjcc0m.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pfpjjcc0m"/>`,
		"fallback": "fa-solid:ghost",
	});
}

export default Component;
