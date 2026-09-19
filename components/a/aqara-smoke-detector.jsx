import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg8uj_7zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg8uj_7zb"/>`,
		"fallback": "cbi:aqara-smoke-detector",
	});
}

export default Component;
