import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_0zv4bme.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_0zv4bme"/>`,
		"fallback": "selfhst:gl-inet-light",
	});
}

export default Component;
