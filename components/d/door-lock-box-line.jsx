import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l92q-gx-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l92q-gx-i"/>`,
		"fallback": "ri:door-lock-box-line",
	});
}

export default Component;
