import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc1fd0lxe.css';
import '../../css/f/fl_jv8bxc.css';
import '../../css/r/rv1q17-gi.css';
import '../../css/b/bgihg339l.css';
import '../../css/q/qafh0n_ea.css';
import '../../css/s/sotteobvs.css';
import '../../css/j/jfgpb9bed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGqdEcMdXs"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGqdEcMdXs)"><path class="fl_jv8bxc"/><path class="rv1q17-gi"/><path class="bgihg339l"/><path class="qafh0n_ea"/><path class="sotteobvs"/><path class="jfgpb9bed"/></g>`,
		"fallback": "circle-flags:et-si",
	});
}

export default Component;
