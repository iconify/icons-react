import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e3sriz8sw.css';
import '../../css/b/b1e4swiah.css';
import '../../css/x/xwj6wumfs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e3sriz8sw"/><path class="b1e4swiah"/><path class="xwj6wumfs"/></g>`,
		"fallback": "bi:calendar2-x",
	});
}

export default Component;
