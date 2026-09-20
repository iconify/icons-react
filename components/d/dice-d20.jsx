import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dujg6qgto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dujg6qgto"/>`,
		"fallback": "mdi:dice-d20",
	});
}

export default Component;
