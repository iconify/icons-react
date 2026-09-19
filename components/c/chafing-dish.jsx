import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d2rpgdn0m.css';
import '../../css/w/w84haqb_y.css';
import '../../css/v/vddxckb1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="d2rpgdn0m"/><path class="w84haqb_y"/><path class="vddxckb1a"/></g>`,
		"fallback": "icon-park-solid:chafing-dish",
	});
}

export default Component;
