import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/ddmw1lqul.css';
import '../../css/v/vrk49ebtl.css';
import '../../css/h/h12wcpb0y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ddmw1lqul"/><path class="vrk49ebtl"/><path class="h12wcpb0y"/></g>`,
		"fallback": "icon-park-solid:eggplant",
	});
}

export default Component;
