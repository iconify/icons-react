import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b3-3bioxu.css';
import '../../css/e/e0u7uw3fq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="b3-3bioxu"/><path class="e0u7uw3fq"/></g>`,
		"fallback": "cryptocurrency-color:chsb",
	});
}

export default Component;
