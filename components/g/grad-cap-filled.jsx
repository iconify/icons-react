import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dba2bbbim.css';
import '../../css/b/bkzi9v3wv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dba2bbbim"/><path class="bkzi9v3wv"/></g>`,
		"fallback": "reicon:grad-cap-filled",
	});
}

export default Component;
