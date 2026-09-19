import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kf4gucb4u.css';
import '../../css/x/xji954c1a.css';
import '../../css/q/qsvi_nbbq.css';
import '../../css/m/mo94rtywa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><circle class="kf4gucb4u"/><path class="xji954c1a"/><circle class="qsvi_nbbq"/><path class="mo94rtywa"/></g>`,
		"fallback": "icon-park-outline:glasses-three",
	});
}

export default Component;
