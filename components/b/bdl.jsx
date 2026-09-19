import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/neu8rnbnx.css';
import '../../css/c/cuq9tqe6r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="neu8rnbnx"/><path class="cuq9tqe6r"/></g>`,
		"fallback": "cryptocurrency-color:bdl",
	});
}

export default Component;
