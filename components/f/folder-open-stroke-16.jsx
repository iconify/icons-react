import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zd391yb8n.css';
import '../../css/e/er759ianl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zd391yb8n"/><path class="er759ianl"/></g>`,
		"fallback": "garden:folder-open-stroke-16",
	});
}

export default Component;
