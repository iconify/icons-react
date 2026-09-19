import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/g50ec9bbg.css';
import '../../css/s/semjo6-hh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="g50ec9bbg"/><path class="semjo6-hh"/></g>`,
		"fallback": "hugeicons:chat-translate-01",
	});
}

export default Component;
