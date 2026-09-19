import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jb9z59bbo.css';
import '../../css/p/pgmlm-bix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jb9z59bbo"/><path class="pgmlm-bix"/></g>`,
		"fallback": "ginetex:30c-fine-wash",
	});
}

export default Component;
