import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu44icb9g.css';
import '../../css/l/l3a29xfgf.css';
import '../../css/v/vuq4s9bmc.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu44icb9g"/><path class="l3a29xfgf"/><path class="vuq4s9bmc"/>`,
		"fallback": "flag:am-4x3",
	});
}

export default Component;
