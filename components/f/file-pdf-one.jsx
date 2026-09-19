import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/f/f5po9bcuy.css';
import '../../css/m/mndv0_ajw.css';
import '../../css/c/cwzlrubce.css';
import '../../css/b/bpjd_mbew.css';
import '../../css/q/q25pvze9b.css';
import '../../css/p/p9hceabxh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="f5po9bcuy"/><path class="mndv0_ajw"/><rect class="cwzlrubce"/><path class="bpjd_mbew"/><path class="q25pvze9b"/><path class="p9hceabxh"/></g>`,
		"fallback": "icon-park-outline:file-pdf-one",
	});
}

export default Component;
