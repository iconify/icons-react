import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/sceen7deg.css';
import '../../css/y/yikp5ibxa.css';
import '../../css/k/kyp5fljps.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="sceen7deg"/><path class="yikp5ibxa"/><path class="kyp5fljps"/></g>`,
		"fallback": "icon-park-solid:arc-de-triomphe",
	});
}

export default Component;
