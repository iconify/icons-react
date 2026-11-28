import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir8b8ublh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir8b8ublh"/>`,
		"fallback": "noviair:bell-ring",
	});
}

export default Component;
