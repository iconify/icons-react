import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jzd4m7btr.css';
import '../../css/a/a3w0apbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jzd4m7btr"/><path class="a3w0apbqi"/></g>`,
		"fallback": "reicon:devices-duotone",
	});
}

export default Component;
