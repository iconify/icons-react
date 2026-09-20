import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zcnz7zb5i.css';
import '../../css/k/krgy9n25b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zcnz7zb5i"/><path class="krgy9n25b"/></g>`,
		"fallback": "reicon:crown2-duotone",
	});
}

export default Component;
