import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jucwpjtyw.css';
import '../../css/t/t_el4tztg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jucwpjtyw"/><path class="t_el4tztg"/></g>`,
		"fallback": "iconoir:git-merge",
	});
}

export default Component;
