import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jqb0enbai.css';
import '../../css/i/iaovq5baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jqb0enbai secondary"/><path class="iaovq5baj primary"/></g>`,
		"fallback": "iconaut:bookmarks-duotone",
	});
}

export default Component;
