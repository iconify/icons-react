import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tysx2_1ah.css';
import '../../css/c/c9r7bvsuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tysx2_1ah"/><path class="c9r7bvsuj"/></g>`,
		"fallback": "reicon:bell-off-duotone",
	});
}

export default Component;
