import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v8ry8ubus.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v8ry8ubus"/>`,
		"fallback": "f7:arrow-down-left-circle-fill",
	});
}

export default Component;
