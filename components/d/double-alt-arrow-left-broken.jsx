import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yxe1q2bbc.css';
import '../../css/y/yea6u7e1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yxe1q2bbc"/><path class="yea6u7e1n"/></g>`,
		"fallback": "solar:double-alt-arrow-left-broken",
	});
}

export default Component;
