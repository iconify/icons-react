import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kepivwbki.css';
import '../../css/r/ry47ltbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kepivwbki"/><path class="ry47ltbcj"/></g>`,
		"fallback": "iconoir:eye-solid",
	});
}

export default Component;
