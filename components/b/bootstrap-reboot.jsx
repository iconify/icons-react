import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bk73s6bhi.css';
import '../../css/c/cy1vif8vc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bk73s6bhi"/><path class="cy1vif8vc"/></g>`,
		"fallback": "bi:bootstrap-reboot",
	});
}

export default Component;
