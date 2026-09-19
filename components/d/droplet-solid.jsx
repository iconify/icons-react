import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/engu9tz6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="engu9tz6e"/>`,
		"fallback": "iconoir:droplet-solid",
	});
}

export default Component;
