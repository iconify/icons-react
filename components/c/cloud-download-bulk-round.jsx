import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq7y_sbgc.css';
import '../../css/x/xput_0jnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq7y_sbgc"/><path class="xput_0jnh"/></g>`,
		"fallback": "coolicons:cloud-download-bulk-round",
	});
}

export default Component;
