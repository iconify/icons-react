import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4s9n5t8l.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4s9n5t8l"/>`,
		"fallback": "fa-brands:blogger-b",
	});
}

export default Component;
