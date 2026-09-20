import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2p38pb5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2p38pb5p"/>`,
		"fallback": "tabler:engine-filled",
	});
}

export default Component;
