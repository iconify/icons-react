import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/o/ot8wni60f.css';
import '../../css/w/w9qqdhocp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="vkcj4bcdm"/><path class="ot8wni60f"/><path class="w9qqdhocp"/></g>`,
		"fallback": "icon-park-outline:benz",
	});
}

export default Component;
