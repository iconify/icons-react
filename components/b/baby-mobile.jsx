import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/m-w6wgbel.css';
import '../../css/g/gxt_-fw7h.css';
import '../../css/l/l2x9dv0pz.css';
import '../../css/y/yij9-ib4c.css';
import '../../css/i/ib55f4h-l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="m-w6wgbel"/><circle class="gxt_-fw7h"/><path class="l2x9dv0pz"/><path class="yij9-ib4c"/><path class="ib55f4h-l"/></g>`,
		"fallback": "icon-park-solid:baby-mobile",
	});
}

export default Component;
