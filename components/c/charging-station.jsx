import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hal7cto6v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hal7cto6v"/>`,
		"fallback": "roentgen:charging-station",
	});
}

export default Component;
