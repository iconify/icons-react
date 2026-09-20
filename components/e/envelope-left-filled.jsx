import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b4_vrm0lk.css';
import '../../css/i/ixp8dd_fd.css';
import '../../css/z/zanu4ibmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b4_vrm0lk"/><path class="ixp8dd_fd"/><path class="zanu4ibmw"/></g>`,
		"fallback": "reicon:envelope-left-filled",
	});
}

export default Component;
