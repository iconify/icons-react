import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x6jmnswod.css';
import '../../css/z/z6t1r3bec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary x6jmnswod"/><path class="primary z6t1r3bec"/></g>`,
		"fallback": "iconaut:input-search-duotone",
	});
}

export default Component;
