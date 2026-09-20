import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r9rc0ma9t.css';
import '../../css/u/u8qfb2wkp.css';
import '../../css/c/cp1-_fbrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r9rc0ma9t"/><path class="u8qfb2wkp"/><path class="cp1-_fbrv"/></g>`,
		"fallback": "reicon:envelope-check-filled",
	});
}

export default Component;
