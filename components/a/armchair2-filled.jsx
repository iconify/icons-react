import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i7c-o-p6c.css';
import '../../css/i/iew_tmbfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i7c-o-p6c"/><path class="iew_tmbfc"/></g>`,
		"fallback": "reicon:armchair2-filled",
	});
}

export default Component;
