import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zm0the13b.css';
import '../../css/e/ehbqml5ic.css';
import '../../css/z/z4qfeoj9o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><circle class="zm0the13b"/><circle class="ehbqml5ic"/><circle class="z4qfeoj9o"/></g>`,
		"fallback": "pepicons:dots-x",
	});
}

export default Component;
