import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wlo7xjcjj.css';
import '../../css/l/lwq8an-5b.css';
import '../../css/u/uo09-pbaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wlo7xjcjj"/><path class="lwq8an-5b"/><path class="uo09-pbaz"/></g>`,
		"fallback": "iconoir:brain",
	});
}

export default Component;
