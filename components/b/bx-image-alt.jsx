import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c98at3bul.css';
import '../../css/i/ii_7x9egm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c98at3bul"/><path class="ii_7x9egm"/>`,
		"fallback": "bx:bx-image-alt",
	});
}

export default Component;
