import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/ge3p8ubns.css';
import '../../css/r/rykk32tyr.css';
import '../../css/q/q-bvz6maf.css';
import '../../css/q/q21y82bke.css';
import '../../css/p/p2n7_bcwb.css';
import '../../css/o/o0790ivhq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="ge3p8ubns"/><path class="rykk32tyr"/><path class="q-bvz6maf"/><path class="q21y82bke"/><circle class="p2n7_bcwb"/><circle class="o0790ivhq"/></g>`,
		"fallback": "icon-park:engineering-vehicle",
	});
}

export default Component;
