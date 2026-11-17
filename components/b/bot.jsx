import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z2zz_yb2l.css';
import '../../css/c/ccgzjab3x.css';
import '../../css/r/rljci9moa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="z2zz_yb2l"/><path class="ccgzjab3x"/><path class="rljci9moa"/></g>`,
		"fallback": "matita:bot",
	});
}

export default Component;
