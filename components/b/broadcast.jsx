import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8zqmhn6z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8zqmhn6z"/>`,
		"fallback": "bi:broadcast",
	});
}

export default Component;
