import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-vwq1b4i.css';
import '../../css/k/kfzu_ljgp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s-vwq1b4i"/><path class="kfzu_ljgp"/></g>`,
		"fallback": "bi:bug-fill",
	});
}

export default Component;
