import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tirjqob-n.css';
import '../../css/u/u51o03bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tirjqob-n"/><path class="u51o03bjy"/></g>`,
		"fallback": "mynaui:bell-home",
	});
}

export default Component;
