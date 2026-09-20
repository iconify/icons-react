import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bsxd97thu.css';
import '../../css/y/y3m90rmkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bsxd97thu"/><path class="y3m90rmkn"/></g>`,
		"fallback": "reicon:image-minus-filled",
	});
}

export default Component;
