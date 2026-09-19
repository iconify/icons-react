import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlf5z0fpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlf5z0fpf"/>`,
		"fallback": "circum:database",
	});
}

export default Component;
