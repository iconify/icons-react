import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/reurb0bxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="reurb0bxh"/>`,
		"fallback": "nrk:face-grinning-solid-expressive",
	});
}

export default Component;
