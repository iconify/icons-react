import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g07rnibyc.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g07rnibyc"/>`,
		"fallback": "whh:braillej",
	});
}

export default Component;
