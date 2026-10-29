import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qrykmdb1t.css';
import '../../css/a/a8rtq7b8k.css';
import '../../css/p/prwrr3loe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="qrykmdb1t"/><path class="a8rtq7b8k wm-a"/><path class="prwrr3loe"/></g>`,
		"fallback": "withicons:cookie-duo",
	});
}

export default Component;
