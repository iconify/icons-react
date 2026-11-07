import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bb1na5jao.css';
import '../../css/z/z7rhdcbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bb1na5jao"/><path clip-rule="evenodd" class="z7rhdcbxy"/>`,
		"fallback": "solar:double-alt-arrow-up-bold-duotone",
	});
}

export default Component;
