import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v__a3647e.css';
import '../../css/x/x-19_rbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v__a3647e"/><path class="x-19_rbsi"/></g>`,
		"fallback": "tabler:box-multiple-filled",
	});
}

export default Component;
