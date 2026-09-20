import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bx68l1boo.css';
import '../../css/x/xx79rpr8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bx68l1boo"/><path class="xx79rpr8w"/></g>`,
		"fallback": "tabler:chart-dots-filled",
	});
}

export default Component;
