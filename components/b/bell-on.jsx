import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wzxk12bdj.css';
import '../../css/t/tirjqob-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wzxk12bdj"/><path class="tirjqob-n"/></g>`,
		"fallback": "mynaui:bell-on",
	});
}

export default Component;
