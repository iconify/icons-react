import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7qxp_zpx.css';

const viewBox = {"width":528,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7qxp_zpx"/>`,
		"fallback": "ps:50-120",
	});
}

export default Component;
