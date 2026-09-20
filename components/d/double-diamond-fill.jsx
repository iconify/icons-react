import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkgj8db4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkgj8db4z"/>`,
		"fallback": "mage:double-diamond-fill",
	});
}

export default Component;
