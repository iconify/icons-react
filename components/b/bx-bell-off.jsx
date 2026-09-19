import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqz_3cskk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqz_3cskk"/>`,
		"fallback": "bx:bx-bell-off",
	});
}

export default Component;
