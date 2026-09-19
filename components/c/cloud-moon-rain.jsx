import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zb3bujb7x.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zb3bujb7x"/>`,
		"fallback": "fa-solid:cloud-moon-rain",
	});
}

export default Component;
