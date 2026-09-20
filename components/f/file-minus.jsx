import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s5c5-5xtk.css';
import '../../css/u/ugpuzbceb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s5c5-5xtk"/><path clip-rule="evenodd" class="ugpuzbceb"/></g>`,
		"fallback": "reicon:file-minus",
	});
}

export default Component;
