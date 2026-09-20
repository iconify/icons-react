import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdir-06ar.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdir-06ar"/>`,
		"fallback": "tabler:device-watch-plus",
	});
}

export default Component;
