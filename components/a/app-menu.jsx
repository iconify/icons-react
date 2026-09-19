import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl8zml4wk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl8zml4wk"/>`,
		"fallback": "fe:app-menu",
	});
}

export default Component;
