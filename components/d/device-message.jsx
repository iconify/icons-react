import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cxmgx1b1q.css';
import '../../css/u/uhmn79b9g.css';
import '../../css/t/t7ohwjbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cxmgx1b1q"/><path class="uhmn79b9g"/><path class="t7ohwjbde"/></g>`,
		"fallback": "reicon:device-message",
	});
}

export default Component;
