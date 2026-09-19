import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zukycii2z.css';
import '../../css/o/oma46e18c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zukycii2z"/><path class="oma46e18c"/></g>`,
		"fallback": "iconoir:erase-solid",
	});
}

export default Component;
