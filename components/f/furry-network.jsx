import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg5a_1n1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg5a_1n1d"/>`,
		"fallback": "thesvg-color:furry-network",
	});
}

export default Component;
