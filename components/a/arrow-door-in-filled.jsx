import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qzgm2s5fh.css';
import '../../css/v/vz7jli4cn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qzgm2s5fh"/><path class="vz7jli4cn"/></g>`,
		"fallback": "reicon:arrow-door-in-filled",
	});
}

export default Component;
