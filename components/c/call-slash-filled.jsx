import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-r86mrta.css';
import '../../css/j/jvkmt5bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-r86mrta"/><path class="jvkmt5bkh"/></g>`,
		"fallback": "reicon:call-slash-filled",
	});
}

export default Component;
