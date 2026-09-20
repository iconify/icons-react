import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i59_vpbwp.css';
import '../../css/c/cmhxciomr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i59_vpbwp"/><path class="cmhxciomr"/>`,
		"fallback": "streamline-ultimate:app-window-multiple-bold",
	});
}

export default Component;
