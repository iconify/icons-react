import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj0fh1bfy.css';
import '../../css/d/dko5xdvrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj0fh1bfy"/><path class="dko5xdvrd"/>`,
		"fallback": "streamline-ultimate:bluetooth-transfer-bold",
	});
}

export default Component;
