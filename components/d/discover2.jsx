import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qxb6u1bfg.css';
import '../../css/h/h4kpqabof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qxb6u1bfg"/><path class="h4kpqabof"/></g>`,
		"fallback": "reicon:discover2",
	});
}

export default Component;
