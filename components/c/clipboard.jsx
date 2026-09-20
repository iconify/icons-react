import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfc0hbabl.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfc0hbabl"/>`,
		"fallback": "lineicons:clipboard",
	});
}

export default Component;
