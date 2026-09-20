import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fjr4614nr.css';
import '../../css/j/j3mqxpbeg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fjr4614nr"/><path class="j3mqxpbeg"/></g>`,
		"fallback": "mynaui:edit-one",
	});
}

export default Component;
