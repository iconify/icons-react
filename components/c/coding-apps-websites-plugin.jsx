import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0a_qlbll.css';
import '../../css/y/y_9gtc1-u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l0a_qlbll"/><path class="y_9gtc1-u"/>`,
		"fallback": "streamline-pixel:coding-apps-websites-plugin",
	});
}

export default Component;
