import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgwypdh-w.css';
import '../../css/u/ujup6jmjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xgwypdh-w"/><path clip-rule="evenodd" class="ujup6jmjt"/></g>`,
		"fallback": "reicon:cart-add",
	});
}

export default Component;
