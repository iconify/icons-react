import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8wyu3a9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x8wyu3a9r"/>`,
		"fallback": "cbi:camera-pet",
	});
}

export default Component;
