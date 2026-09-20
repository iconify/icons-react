import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie9unqupy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie9unqupy"/>`,
		"fallback": "tabler:hexagon-number-2-filled",
	});
}

export default Component;
