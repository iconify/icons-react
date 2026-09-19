import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f5po9bcuy.css';
import '../../css/m/mndv0_ajw.css';
import '../../css/p/p9hceabxh.css';
import '../../css/c/cwzlrubce.css';
import '../../css/q/qgrh-6wks.css';
import '../../css/a/aq5hxgt2c.css';
import '../../css/q/q0v70bbbh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="f5po9bcuy"/><path class="mndv0_ajw"/><path class="p9hceabxh"/><rect class="cwzlrubce"/><path class="qgrh-6wks"/><path class="aq5hxgt2c"/><path class="q0v70bbbh"/></g>`,
		"fallback": "icon-park-outline:file-zip",
	});
}

export default Component;
