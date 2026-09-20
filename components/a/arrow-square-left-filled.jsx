import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/degyop8_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="degyop8_z"/>`,
		"fallback": "reicon:arrow-square-left-filled",
	});
}

export default Component;
