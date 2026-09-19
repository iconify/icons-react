import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qeou3-vct.css';
import '../../css/r/rmp7r0bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qeou3-vct"/><path class="rmp7r0bjh"/></g>`,
		"fallback": "iconoir:emoji-look-down",
	});
}

export default Component;
