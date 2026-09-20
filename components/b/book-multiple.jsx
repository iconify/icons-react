import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo-i2pb8d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo-i2pb8d"/>`,
		"fallback": "mdi:book-multiple",
	});
}

export default Component;
