import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w_8zdphyl.css';
import '../../css/j/j58rm48ey.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w_8zdphyl"/><circle class="j58rm48ey"/></g>`,
		"fallback": "charm:anchor",
	});
}

export default Component;
