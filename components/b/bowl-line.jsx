import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od5dngbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od5dngbta"/>`,
		"fallback": "ri:bowl-line",
	});
}

export default Component;
