import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g3oicd9zy.css';
import '../../css/w/w6urksb-q.css';
import '../../css/h/ht8ohn1mx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="g3oicd9zy"/><path class="w6urksb-q"/><path class="ht8ohn1mx"/></g>`,
		"fallback": "icon-park-outline:disk",
	});
}

export default Component;
