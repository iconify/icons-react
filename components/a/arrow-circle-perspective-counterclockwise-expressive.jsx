import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujv1pcbsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujv1pcbsu"/>`,
		"fallback": "nrk:arrow-circle-perspective-counterclockwise-expressive",
	});
}

export default Component;
