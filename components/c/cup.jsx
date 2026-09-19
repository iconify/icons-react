import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/y/yw5nrdgml.css';
import '../../css/l/lxdln76cc.css';
import '../../css/j/jnskwr84b.css';
import '../../css/r/rfia81eko.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="yw5nrdgml"/><path class="lxdln76cc"/><path class="jnskwr84b"/><path class="rfia81eko"/></g>`,
		"fallback": "icon-park-solid:cup",
	});
}

export default Component;
