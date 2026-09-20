import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymx8q3l6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymx8q3l6u"/>`,
		"fallback": "ri:capsule-line",
	});
}

export default Component;
