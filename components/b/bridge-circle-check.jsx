import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skicyub9n.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skicyub9n"/>`,
		"fallback": "fa6-solid:bridge-circle-check",
	});
}

export default Component;
