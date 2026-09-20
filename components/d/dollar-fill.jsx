import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2pb8ubfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2pb8ubfd"/>`,
		"fallback": "mage:dollar-fill",
	});
}

export default Component;
