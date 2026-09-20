import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzq9sqktj.css';
import '../../css/r/rq68acf4y.css';
import '../../css/x/xgae6gb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzq9sqktj"/><path class="rq68acf4y"/><path clip-rule="evenodd" class="xgae6gb3z"/></g>`,
		"fallback": "nrk:go-forward-30",
	});
}

export default Component;
