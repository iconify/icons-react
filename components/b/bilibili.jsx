import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we_-wp3rf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we_-wp3rf"/>`,
		"fallback": "dinkie-icons:bilibili",
	});
}

export default Component;
