import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-22xbcav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-22xbcav"/>`,
		"fallback": "coolicons:circle-sparkle-round",
	});
}

export default Component;
