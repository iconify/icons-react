import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwxet59ny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwxet59ny"/>`,
		"fallback": "noviair-light:clapperboard-check",
	});
}

export default Component;
