import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xrphkxboj.css';
import '../../css/m/memvqfbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xrphkxboj"/><path class="memvqfbtp"/></g>`,
		"fallback": "streamline-ultimate:aircraft-hot-air-balloon-2",
	});
}

export default Component;
