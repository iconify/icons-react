import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/u/u5kw-wxio.css';
import '../../css/n/n1n4jbu1l.css';
import '../../css/z/zoeq60bqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="u5kw-wxio"/><path class="n1n4jbu1l"/><path class="zoeq60bqx"/></g>`,
		"fallback": "icon-park-outline:buy",
	});
}

export default Component;
