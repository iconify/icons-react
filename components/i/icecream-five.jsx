import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/qf6nxob5u.css';
import '../../css/f/fr0tverdm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="qf6nxob5u"/><path class="fr0tverdm"/></g>`,
		"fallback": "icon-park-outline:icecream-five",
	});
}

export default Component;
