import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj7b05b-b.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj7b05b-b"/>`,
		"fallback": "whh:globe",
	});
}

export default Component;
