import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk5yd9wru.css';
import '../../css/y/ygr19icki.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk5yd9wru"/><path clip-rule="evenodd" class="ygr19icki"/>`,
		"fallback": "qlementine-icons:gamepad-start-16",
	});
}

export default Component;
