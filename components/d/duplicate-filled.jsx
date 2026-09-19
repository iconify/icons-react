import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq0htvbpm.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq0htvbpm"/>`,
		"fallback": "dinkie-icons:duplicate-filled",
	});
}

export default Component;
