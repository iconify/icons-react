import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7rhdcbxy.css';
import '../../css/v/ve9aog86g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z7rhdcbxy"/><path class="ve9aog86g"/>`,
		"fallback": "solar:double-alt-arrow-up-bold",
	});
}

export default Component;
