import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sktjwobeu.css';
import '../../css/d/dwm4owi0d.css';
import '../../css/y/yl2fcsb_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="sktjwobeu"/><circle class="dwm4owi0d"/><path class="yl2fcsb_p"/></g>`,
		"fallback": "icon-park-outline:disabled-computer",
	});
}

export default Component;
