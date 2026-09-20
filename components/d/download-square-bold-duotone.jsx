import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/h/hq5ijhzvz.css';
import '../../css/k/k72dcylhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="hq5ijhzvz"/><path class="k72dcylhh"/></g>`,
		"fallback": "solar:download-square-bold-duotone",
	});
}

export default Component;
