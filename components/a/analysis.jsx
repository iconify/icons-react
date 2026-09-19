import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nw9s1xgqx.css';
import '../../css/z/z-3ptvbim.css';
import '../../css/h/hxw676bki.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="nw9s1xgqx"/><path class="z-3ptvbim"/><path class="hxw676bki"/></g>`,
		"fallback": "icon-park-outline:analysis",
	});
}

export default Component;
