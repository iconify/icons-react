import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rd6aur8hh.css';
import '../../css/g/g-55tibjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rd6aur8hh"/><path class="g-55tibjl"/></g>`,
		"fallback": "andrsrxn:cursor-text",
	});
}

export default Component;
