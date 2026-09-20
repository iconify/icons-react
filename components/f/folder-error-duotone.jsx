import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x1sb-acoh.css';
import '../../css/b/bci58njuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x1sb-acoh"/><path class="bci58njuu"/></g>`,
		"fallback": "reicon:folder-error-duotone",
	});
}

export default Component;
