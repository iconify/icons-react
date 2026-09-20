import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nhq6-qa5r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nhq6-qa5r"/>`,
		"fallback": "maki:embassy",
	});
}

export default Component;
