import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi-zpvb_c.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi-zpvb_c"/>`,
		"fallback": "fluent-mdl2:developer-tools",
	});
}

export default Component;
