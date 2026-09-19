import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jpfn87ibu.css';
import '../../css/x/x9oovrbef.css';
import '../../css/p/p8t9n2b4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jpfn87ibu"/><path class="x9oovrbef"/><path clip-rule="evenodd" class="p8t9n2b4x"/></g>`,
		"fallback": "gg:chevron-double-down-r",
	});
}

export default Component;
