import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nt2rypb3g.css';
import '../../css/c/cg574kbfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nt2rypb3g"/><path clip-rule="evenodd" class="cg574kbfe"/></g>`,
		"fallback": "reicon:hashtag-circle-filled",
	});
}

export default Component;
