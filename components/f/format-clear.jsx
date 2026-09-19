import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/boqn2bbhz.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="boqn2bbhz"/>`,
		"fallback": "zmdi:format-clear",
	});
}

export default Component;
