import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yq__4abaf.css';
import '../../css/t/t9r610bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yq__4abaf"/><path clip-rule="evenodd" class="t9r610bql"/></g>`,
		"fallback": "nrk:calendar",
	});
}

export default Component;
