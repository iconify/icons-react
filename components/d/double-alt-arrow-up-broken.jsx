import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k32cqsb-b.css';
import '../../css/m/msvkvmbbw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k32cqsb-b"/><path class="msvkvmbbw"/></g>`,
		"fallback": "solar:double-alt-arrow-up-broken",
	});
}

export default Component;
