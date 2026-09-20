import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ufmxg046i.css';
import '../../css/e/e1up9mb_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ufmxg046i"/><path class="e1up9mb_d"/></g>`,
		"fallback": "reicon:alarm-clock-off-filled",
	});
}

export default Component;
