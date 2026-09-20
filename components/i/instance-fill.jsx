import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c65f93b4e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c65f93b4e"/>`,
		"fallback": "ri:instance-fill",
	});
}

export default Component;
