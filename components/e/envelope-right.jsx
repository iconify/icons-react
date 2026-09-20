import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b8o2opbmf.css';
import '../../css/l/lisru-b0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="b8o2opbmf"/><path class="lisru-b0t"/></g>`,
		"fallback": "reicon:envelope-right",
	});
}

export default Component;
