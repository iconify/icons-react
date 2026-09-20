import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yb9q0o-di.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yb9q0o-di"/>`,
		"fallback": "mage:double-arrow-circle-fill",
	});
}

export default Component;
