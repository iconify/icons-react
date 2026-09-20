import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cnc1d6jxb.css';
import '../../css/l/luph5bcfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cnc1d6jxb"/><path class="luph5bcfy"/></g>`,
		"fallback": "mynaui:chevrons-up-left",
	});
}

export default Component;
