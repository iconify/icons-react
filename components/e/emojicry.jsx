import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua2y-eb7d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ua2y-eb7d"/>`,
		"fallback": "whh:emojicry",
	});
}

export default Component;
