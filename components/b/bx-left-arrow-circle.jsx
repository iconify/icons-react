import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu7mpeebk.css';
import '../../css/n/npp4pnb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu7mpeebk"/><path class="npp4pnb4w"/>`,
		"fallback": "bx:bx-left-arrow-circle",
	});
}

export default Component;
