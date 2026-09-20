import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul9m5ac3g.css';
import '../../css/j/j26snyixz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul9m5ac3g"/><path class="j26snyixz"/>`,
		"fallback": "ooui:funnel-rtl",
	});
}

export default Component;
