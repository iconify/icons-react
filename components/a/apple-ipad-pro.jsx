import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vsfz5syxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vsfz5syxn"/>`,
		"fallback": "cbi:apple-ipad-pro",
	});
}

export default Component;
