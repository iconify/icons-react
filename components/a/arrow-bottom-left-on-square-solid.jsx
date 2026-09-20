import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wycc4kp6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wycc4kp6s"/>`,
		"fallback": "sidekickicons:arrow-bottom-left-on-square-solid",
	});
}

export default Component;
