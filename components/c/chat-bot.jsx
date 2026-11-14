import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tyz_-1bjv.css';
import '../../css/m/mzht45buz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tyz_-1bjv"/><path class="mzht45buz"/></g>`,
		"fallback": "hugeicons:chat-bot",
	});
}

export default Component;
