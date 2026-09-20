import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mju660_tz.css';
import '../../css/r/rf2l5qf_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mju660_tz"/><path class="rf2l5qf_l"/></g>`,
		"fallback": "reicon:emoji-square-duotone",
	});
}

export default Component;
