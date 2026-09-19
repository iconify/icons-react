import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/h9-jrac4w.css';
import '../../css/e/efhy0xuho.css';
import '../../css/b/baquecuxi.css';
import '../../css/d/do5vkwb4s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="h9-jrac4w"/><path class="efhy0xuho"/><path class="baquecuxi"/><path class="do5vkwb4s"/></g>`,
		"fallback": "icon-park-outline:dome",
	});
}

export default Component;
