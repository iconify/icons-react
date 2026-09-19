import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0mq3zi8m.css';
import '../../css/j/jvh2qfzit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0mq3zi8m"/><path class="jvh2qfzit"/>`,
		"fallback": "boxicons:handheld-alt",
	});
}

export default Component;
