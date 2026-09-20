import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/idlw553oh.css';
import '../../css/b/bow1m9hzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="idlw553oh"/><path class="bow1m9hzn"/></g>`,
		"fallback": "mynaui:forward-diamond",
	});
}

export default Component;
