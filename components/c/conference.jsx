import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rs2a0w5yu.css';
import '../../css/y/ypavk3bmk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rs2a0w5yu"/><path class="ypavk3bmk"/></g>`,
		"fallback": "hugeicons:conference",
	});
}

export default Component;
