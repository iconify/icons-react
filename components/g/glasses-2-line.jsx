import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5pc01b5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5pc01b5e"/>`,
		"fallback": "ri:glasses-2-line",
	});
}

export default Component;
