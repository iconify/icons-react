import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yc4e6v2qt.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yc4e6v2qt"/>`,
		"fallback": "system-uicons:cross",
	});
}

export default Component;
