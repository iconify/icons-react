import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihf3etbjh.css';
import '../../css/p/ph2qz-bis.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihf3etbjh"/><path class="ph2qz-bis"/>`,
		"fallback": "ion:alarm",
	});
}

export default Component;
