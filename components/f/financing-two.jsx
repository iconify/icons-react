import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/issgrdd1r.css';
import '../../css/q/qwt-kf13t.css';
import '../../css/t/tvonebcsg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="issgrdd1r"/><rect class="qwt-kf13t"/><path class="tvonebcsg"/></g>`,
		"fallback": "icon-park-outline:financing-two",
	});
}

export default Component;
