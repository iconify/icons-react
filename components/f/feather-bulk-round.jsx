import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/npueh1f_r.css';
import '../../css/i/iihub62gw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="npueh1f_r"/><path class="iihub62gw"/></g>`,
		"fallback": "coolicons:feather-bulk-round",
	});
}

export default Component;
