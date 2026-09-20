import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voxoyd1yc.css';
import '../../css/y/ys14dvbif.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voxoyd1yc"/><path clip-rule="evenodd" class="ys14dvbif"/>`,
		"fallback": "token:bft",
	});
}

export default Component;
