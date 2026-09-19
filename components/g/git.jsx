import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/d0osp5o0j.css';
import '../../css/c/cjtb3eb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="d0osp5o0j"/><path class="cjtb3eb-m"/></g>`,
		"fallback": "iconoir:git",
	});
}

export default Component;
