import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izi3e6qsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izi3e6qsl"/>`,
		"fallback": "noviair:hospital",
	});
}

export default Component;
