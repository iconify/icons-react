import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zg745ongr.css';
import '../../css/x/xjtf52b4g.css';
import '../../css/e/eifg-8bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zg745ongr"/><path class="xjtf52b4g"/><path class="eifg-8bbb"/></g>`,
		"fallback": "iconoir:bathroom-solid",
	});
}

export default Component;
