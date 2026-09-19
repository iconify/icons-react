import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0ic71k9e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0ic71k9e"/>`,
		"fallback": "whh:bacon",
	});
}

export default Component;
