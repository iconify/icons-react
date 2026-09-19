import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a12w9vk-j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a12w9vk-j"/>`,
		"fallback": "whh:beaker",
	});
}

export default Component;
