import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qt8vcub3a.css';
import '../../css/f/f_opi6bty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qt8vcub3a"/><path clip-rule="evenodd" class="f_opi6bty"/></g>`,
		"fallback": "gg:clipboard",
	});
}

export default Component;
