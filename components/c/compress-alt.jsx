import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nza448bsc.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nza448bsc"/>`,
		"fallback": "fa-solid:compress-alt",
	});
}

export default Component;
