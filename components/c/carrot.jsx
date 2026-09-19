import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xar5g-b_u.css';
import '../../css/g/gm2aim3mj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xar5g-b_u"/><path class="gm2aim3mj"/></g>`,
		"fallback": "icon-park-outline:carrot",
	});
}

export default Component;
