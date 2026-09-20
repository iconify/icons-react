import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3w13jb1j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3w13jb1j"/>`,
		"fallback": "mdi:archive-refresh",
	});
}

export default Component;
