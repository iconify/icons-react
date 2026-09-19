import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/nde60ab7m.css';
import '../../css/e/ez_zj8b4g.css';
import '../../css/a/arg04jbjn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="nde60ab7m"/><path class="ez_zj8b4g"/><path class="arg04jbjn"/></g>`,
		"fallback": "icon-park-outline:facial-mask",
	});
}

export default Component;
