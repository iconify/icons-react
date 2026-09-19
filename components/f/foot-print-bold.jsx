import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r3j7pccxy.css';
import '../../css/t/t-ctftbys.css';
import '../../css/w/wfa4t_zlf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="r3j7pccxy"/><path class="t-ctftbys"/><path class="wfa4t_zlf"/></g>`,
		"fallback": "glyphs:foot-print-bold",
	});
}

export default Component;
