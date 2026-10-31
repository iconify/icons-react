import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/feu6ydgps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="feu6ydgps"/>`,
		"fallback": "coolicons:aperture-round",
	});
}

export default Component;
