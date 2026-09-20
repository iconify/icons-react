import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0uk58atx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0uk58atx"/>`,
		"fallback": "streamline-sharp:ice-cream-1",
	});
}

export default Component;
