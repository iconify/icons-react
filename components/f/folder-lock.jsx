import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ageny807r.css';
import '../../css/k/khziu2zaz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ageny807r"/><path class="khziu2zaz"/></g>`,
		"fallback": "at-icons:folder-lock",
	});
}

export default Component;
