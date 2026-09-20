import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ib6358b_g.css';
import '../../css/o/o8v9etkqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ib6358b_g"/><path class="o8v9etkqd"/></g>`,
		"fallback": "solar:bone-crack-bold-duotone",
	});
}

export default Component;
