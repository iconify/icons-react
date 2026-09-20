import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/r/rii7ped9y.css';
import '../../css/r/rjkpw6bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="rii7ped9y"/><path class="rjkpw6bow"/></g>`,
		"fallback": "streamline-cyber:bubble-chat-like",
	});
}

export default Component;
