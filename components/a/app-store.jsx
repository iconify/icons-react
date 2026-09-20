import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swem9zb9q.css';
import '../../css/m/m2hb1402k.css';
import '../../css/b/bgct7jsbk.css';
import '../../css/f/fetk55mbs.css';

const viewBox = {"width":800,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGzsZW5bmW" x1="400.05" x2="400.05" y1="798.772" y2="-1.228" gradientTransform="matrix(1 0 0 -1 0 798.772)" gradientUnits="userSpaceOnUse"><stop offset="0" class="swem9zb9q"/><stop offset="1" class="m2hb1402k"/></linearGradient><path fill="url(#SVGzsZW5bmW)" class="bgct7jsbk"/><path class="fetk55mbs"/>`,
		"fallback": "thesvg-color:app-store",
	});
}

export default Component;
