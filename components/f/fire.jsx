import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov04gg5zt.css';
import '../../css/j/j1t---_1f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov04gg5zt"/><path class="j1t---_1f"/>`,
		"fallback": "vaadin:fire",
	});
}

export default Component;
