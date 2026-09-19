import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uisjjab3n.css';
import '../../css/d/dhhwfxbcg.css';
import '../../css/b/bans_nvbf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uisjjab3n"/><path class="dhhwfxbcg"/><path class="bans_nvbf"/></g>`,
		"fallback": "icon-park-solid:aviation",
	});
}

export default Component;
