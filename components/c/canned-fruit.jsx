import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/o/ood7b4x1k.css';
import '../../css/i/ia6zp40mg.css';
import '../../css/i/i43jspqdt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ood7b4x1k"/><path class="ia6zp40mg"/><path class="i43jspqdt"/></g>`,
		"fallback": "icon-park-solid:canned-fruit",
	});
}

export default Component;
