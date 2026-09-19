import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r52iulvyq.css';
import '../../css/g/g8ehc8btv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r52iulvyq"/><path class="g8ehc8btv"/></g>`,
		"fallback": "gg:border-right",
	});
}

export default Component;
