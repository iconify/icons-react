import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzp2s1bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzp2s1bow"/>`,
		"fallback": "cbi:aqara-h1-switch",
	});
}

export default Component;
