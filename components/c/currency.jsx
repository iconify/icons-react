import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m4l-9ybuj.css';
import '../../css/a/apfg9kbyw.css';
import '../../css/q/q1m15dbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="m4l-9ybuj"/><path class="apfg9kbyw"/><circle class="q1m15dbht"/></g>`,
		"fallback": "hugeicons:currency",
	});
}

export default Component;
