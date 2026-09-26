import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ya_55rppu.css';
import '../../css/t/twc0fe63r.css';
import '../../css/i/iewnogbtp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ya_55rppu"/><path class="twc0fe63r"/><path class="iewnogbtp"/></g>`,
		"fallback": "solar:file-favorite-bold-duotone",
	});
}

export default Component;
