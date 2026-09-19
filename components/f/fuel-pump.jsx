import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wtze9dbun.css';
import '../../css/l/l6sl_z5tx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wtze9dbun"/><path class="l6sl_z5tx"/></g>`,
		"fallback": "bi:fuel-pump",
	});
}

export default Component;
