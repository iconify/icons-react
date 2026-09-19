import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sleoyfbzy.css';
import '../../css/q/q98k1yb5i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sleoyfbzy"/><path clip-rule="evenodd" class="q98k1yb5i"/></g>`,
		"fallback": "heroicons:archive-box-x-mark-16-solid",
	});
}

export default Component;
