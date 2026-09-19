import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/b74gn3bkm.css';
import '../../css/e/eucewobtj.css';
import '../../css/j/jta9gpb_x.css';
import '../../css/d/dxqwydcbb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="b74gn3bkm"/><path class="eucewobtj"/><path class="jta9gpb_x"/><path class="dxqwydcbb"/></g>`,
		"fallback": "icon-park-outline:increase-the-scale",
	});
}

export default Component;
