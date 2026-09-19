import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rx5d4dp5k.css';
import '../../css/d/dwytx_boo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rx5d4dp5k"/><path class="dwytx_boo"/></g>`,
		"fallback": "icon-park-outline:general-branch",
	});
}

export default Component;
