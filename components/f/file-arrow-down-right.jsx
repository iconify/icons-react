import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ukt0o5r8x.css';
import '../../css/j/jgv7qcc9y.css';
import '../../css/e/egneazb5l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ukt0o5r8x"/><path class="jgv7qcc9y"/><path class="egneazb5l"/></g>`,
		"fallback": "at-icons:file-arrow-down-right",
	});
}

export default Component;
