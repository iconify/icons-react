import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/p/pj3lv5b_y.css';
import '../../css/q/q9m36mbai.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="pj3lv5b_y"/><path class="q9m36mbai"/></g>`,
		"fallback": "icon-park-solid:christmas-tree-one",
	});
}

export default Component;
