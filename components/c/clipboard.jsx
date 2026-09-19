import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kox3l5rcm.css';
import '../../css/y/y66huhbnz.css';
import '../../css/z/zaico2bqj.css';

const viewBox = {"width":28,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kox3l5rcm"/><path class="y66huhbnz"/><path class="zaico2bqj"/></g>`,
		"fallback": "et:clipboard",
	});
}

export default Component;
