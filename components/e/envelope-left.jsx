import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mxy_3ebsi.css';
import '../../css/s/scalqc5sj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mxy_3ebsi"/><path clip-rule="evenodd" class="scalqc5sj"/></g>`,
		"fallback": "reicon:envelope-left",
	});
}

export default Component;
