import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aclqr6c9v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aclqr6c9v"/>`,
		"fallback": "ri:group-2-line",
	});
}

export default Component;
