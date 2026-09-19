import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r79_o3b5u.css';
import '../../css/u/uf5xalb-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r79_o3b5u"/><path clip-rule="evenodd" class="uf5xalb-j"/></g>`,
		"fallback": "iconoir:airplane-rotation",
	});
}

export default Component;
