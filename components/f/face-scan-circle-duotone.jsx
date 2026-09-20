import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a0idaqb9i.css';
import '../../css/p/p3ilim6vk.css';
import '../../css/r/rm3taibxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="a0idaqb9i"/><path class="p3ilim6vk"/><path class="rm3taibxq"/></g>`,
		"fallback": "reicon:face-scan-circle-duotone",
	});
}

export default Component;
