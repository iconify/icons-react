import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wvfx0dbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wvfx0dbup"/>`,
		"fallback": "codex:bold",
	});
}

export default Component;
