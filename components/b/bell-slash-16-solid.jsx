import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/utgmp98ec.css';
import '../../css/u/uklynjamw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="utgmp98ec"/><path class="uklynjamw"/></g>`,
		"fallback": "heroicons:bell-slash-16-solid",
	});
}

export default Component;
