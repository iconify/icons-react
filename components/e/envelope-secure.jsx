import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5jgz3bzf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5jgz3bzf"/>`,
		"fallback": "mdi:envelope-secure",
	});
}

export default Component;
