import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/spfnwnbrc.css';
import '../../css/q/qy-xuybra.css';
import '../../css/h/hk92wwirk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="spfnwnbrc"/><path class="qy-xuybra"/><path class="hk92wwirk"/></g>`,
		"fallback": "icon-park-outline:bring-to-front",
	});
}

export default Component;
