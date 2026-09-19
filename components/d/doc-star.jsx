import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kdqg0jb5n.css';
import '../../css/c/cp5t-n2_r.css';
import '../../css/y/ysqi2pc_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kdqg0jb5n"/><path class="cp5t-n2_r"/><path class="ysqi2pc_u"/></g>`,
		"fallback": "iconoir:doc-star",
	});
}

export default Component;
