import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhwraxbac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhwraxbac"/>`,
		"fallback": "mdi:glass-flute",
	});
}

export default Component;
