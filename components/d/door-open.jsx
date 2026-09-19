import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ws7kkc8ce.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ws7kkc8ce"/>`,
		"fallback": "fa6-solid:door-open",
	});
}

export default Component;
