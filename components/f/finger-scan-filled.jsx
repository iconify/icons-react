import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jjeqq8bnq.css';
import '../../css/d/drme75bjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jjeqq8bnq"/><path class="drme75bjr"/></g>`,
		"fallback": "reicon:finger-scan-filled",
	});
}

export default Component;
