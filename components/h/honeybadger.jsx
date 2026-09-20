import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxph7qb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxph7qb8s"/>`,
		"fallback": "thesvg-color:honeybadger",
	});
}

export default Component;
