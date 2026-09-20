import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-0r88qhp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-0r88qhp"/>`,
		"fallback": "ri:hexagon-fill",
	});
}

export default Component;
