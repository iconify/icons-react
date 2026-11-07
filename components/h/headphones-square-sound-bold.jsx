import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v69cw1nsu.css';
import '../../css/y/yzo8rfbaj.css';
import '../../css/y/y2atx_blf.css';
import '../../css/t/tn5jxebef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v69cw1nsu"/><path clip-rule="evenodd" class="yzo8rfbaj"/><path clip-rule="evenodd" class="y2atx_blf"/><path clip-rule="evenodd" class="tn5jxebef"/>`,
		"fallback": "solar:headphones-square-sound-bold",
	});
}

export default Component;
