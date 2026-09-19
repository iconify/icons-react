import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/d/d2rpgdn0m.css';
import '../../css/o/oxj5f2bhb.css';
import '../../css/v/vddxckb1a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="d2rpgdn0m"/><path class="oxj5f2bhb"/><path class="vddxckb1a"/></g>`,
		"fallback": "icon-park-outline:chafing-dish",
	});
}

export default Component;
