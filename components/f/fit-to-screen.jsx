import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnob0x5zx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnob0x5zx"/>`,
		"fallback": "mdi:fit-to-screen",
	});
}

export default Component;
