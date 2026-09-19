import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/g/g39ybsbwu.css';
import '../../css/l/lo5cwabix.css';
import '../../css/a/a8g_sshhh.css';
import '../../css/p/pwb2h2p_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="g39ybsbwu"/><path class="lo5cwabix"/><path class="a8g_sshhh"/><path class="pwb2h2p_t"/></g>`,
		"fallback": "icon-park-outline:fishing",
	});
}

export default Component;
