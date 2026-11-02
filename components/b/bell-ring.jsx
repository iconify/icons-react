import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/epqu85bre.css';
import '../../css/c/cayxripun.css';
import '../../css/z/zz423vzxd.css';
import '../../css/q/qe-x2bc1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="epqu85bre"/><path class="cayxripun"/><path class="zz423vzxd"/><path class="qe-x2bc1w"/></g>`,
		"fallback": "matita:bell-ring",
	});
}

export default Component;
