import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vuz12tb0u.css';
import '../../css/k/ki59usoeo.css';
import '../../css/q/qgc7wpbsb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vuz12tb0u"/><path class="ki59usoeo"/><path class="qgc7wpbsb"/></g>`,
		"fallback": "icon-park-solid:certificate",
	});
}

export default Component;
