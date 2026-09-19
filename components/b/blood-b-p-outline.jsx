import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0hgbgb9d.css';
import '../../css/e/eumqw-b2u.css';
import '../../css/w/w5nl8xbex.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="p0hgbgb9d"/><path class="eumqw-b2u"/><path clip-rule="evenodd" class="w5nl8xbex"/></g>`,
		"fallback": "healthicons:blood-b-p-outline",
	});
}

export default Component;
