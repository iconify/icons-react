import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmgxvzi8r.css';
import '../../css/g/gb4dymbxw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmgxvzi8r"/><path clip-rule="evenodd" class="gb4dymbxw"/></g>`,
		"fallback": "gravity-ui:cookie",
	});
}

export default Component;
