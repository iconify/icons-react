import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qz9_4ab0u.css';
import '../../css/x/x8ll_eb0k.css';
import '../../css/f/fag8nwoln.css';
import '../../css/u/uov2v7y7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="qz9_4ab0u"/><path class="x8ll_eb0k"/><path class="fag8nwoln"/><path class="uov2v7y7s"/></g>`,
		"fallback": "icon-park-solid:chinese-pavilion",
	});
}

export default Component;
