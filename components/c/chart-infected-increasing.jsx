import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xqtq6fuwi.css';
import '../../css/g/gr22jh81l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xqtq6fuwi"/><path class="gr22jh81l"/></g>`,
		"fallback": "healthicons:chart-infected-increasing",
	});
}

export default Component;
