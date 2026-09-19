import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca5ull6cn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca5ull6cn"/>`,
		"fallback": "dashicons:code-standards",
	});
}

export default Component;
