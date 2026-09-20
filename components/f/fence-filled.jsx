import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq5s4xbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq5s4xbgg"/>`,
		"fallback": "tabler:fence-filled",
	});
}

export default Component;
