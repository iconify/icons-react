import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l-31b0b3o.css';
import '../../css/i/ijs56tbgd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l-31b0b3o"/><path class="ijs56tbgd"/></g>`,
		"fallback": "reicon:coin2-filled",
	});
}

export default Component;
