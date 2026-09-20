import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzq9sqktj.css';
import '../../css/w/wdcc_0-zj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzq9sqktj"/><path class="wdcc_0-zj"/></g>`,
		"fallback": "nrk:go-forward-15",
	});
}

export default Component;
