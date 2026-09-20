import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/icjakxyrj.css';
import '../../css/g/gg6vb4b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="icjakxyrj"/><path class="gg6vb4b-x"/></g>`,
		"fallback": "reicon:basket-shopping-filled",
	});
}

export default Component;
