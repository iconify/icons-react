import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/k6zqa2bdl.css';
import '../../css/g/g0l_0wbda.css';
import '../../css/r/rei6xduai.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="k6zqa2bdl"/><path clip-rule="evenodd" class="g0l_0wbda"/><path clip-rule="evenodd" class="rei6xduai"/></g>`,
		"fallback": "pepicons:book-print",
	});
}

export default Component;
