import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx-iusb7i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx-iusb7i"/>`,
		"fallback": "game-icons:arc-triomphe",
	});
}

export default Component;
