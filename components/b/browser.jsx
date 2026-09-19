import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ds313yb_f.css';
import '../../css/x/xvaq72vwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ds313yb_f"/><path clip-rule="evenodd" class="xvaq72vwp"/></g>`,
		"fallback": "gg:browser",
	});
}

export default Component;
