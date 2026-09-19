import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mxaazra7v.css';
import '../../css/l/l54ohfuze.css';
import '../../css/v/v-cwrbbvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mxaazra7v"/><path class="l54ohfuze"/><path class="v-cwrbbvd"/></g>`,
		"fallback": "icon-park-solid:find",
	});
}

export default Component;
