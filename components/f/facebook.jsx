import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e01i893uu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e01i893uu"/>`,
		"fallback": "mage:facebook",
	});
}

export default Component;
