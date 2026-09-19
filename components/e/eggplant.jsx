import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/ddmw1lqul.css';
import '../../css/z/zcv0prits.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ddmw1lqul"/><path class="zcv0prits"/></g>`,
		"fallback": "icon-park-outline:eggplant",
	});
}

export default Component;
