import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z57zs1b4t.css';
import '../../css/g/ghuosw-hc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z57zs1b4t"/><path class="ghuosw-hc"/></g>`,
		"fallback": "mynaui:battery-check",
	});
}

export default Component;
