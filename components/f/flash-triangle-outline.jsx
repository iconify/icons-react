import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvlp93b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvlp93b-i"/>`,
		"fallback": "mdi:flash-triangle-outline",
	});
}

export default Component;
