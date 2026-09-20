import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk7w6qbmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk7w6qbmh"/>`,
		"fallback": "tabler:flag-pin",
	});
}

export default Component;
