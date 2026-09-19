import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y-18_0nso.css';
import '../../css/a/a7blko62y.css';
import '../../css/n/n4inx3b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y-18_0nso"/><path class="a7blko62y"/><path class="n4inx3b9i"/></g>`,
		"fallback": "iconoir:emoji-puzzled",
	});
}

export default Component;
