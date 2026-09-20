import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju4kv9bwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju4kv9bwm"/>`,
		"fallback": "mdi:beam",
	});
}

export default Component;
