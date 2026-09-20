import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qwx1ffbcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qwx1ffbcl"/>`,
		"fallback": "pixelarticons:contact",
	});
}

export default Component;
