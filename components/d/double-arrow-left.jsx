import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rkljacc9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rkljacc9y"/>`,
		"fallback": "mage:double-arrow-left",
	});
}

export default Component;
