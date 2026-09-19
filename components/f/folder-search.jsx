import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/c/ctq-00ygq.css';
import '../../css/b/bbir9wb5m.css';
import '../../css/w/wxrtcfo2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ctq-00ygq"/><circle class="bbir9wb5m"/><path class="wxrtcfo2g"/></g>`,
		"fallback": "icon-park-outline:folder-search",
	});
}

export default Component;
