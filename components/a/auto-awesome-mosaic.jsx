import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0lf81_ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0lf81_ag"/>`,
		"fallback": "mdi:auto-awesome-mosaic",
	});
}

export default Component;
