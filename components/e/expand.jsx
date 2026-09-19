import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-2n_lbtc.css';
import '../../css/k/k8z476b2t.css';
import '../../css/j/jteu77bhb.css';
import '../../css/v/vz1gykbsn.css';
import '../../css/r/r5ui-rboh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-2n_lbtc"/><path class="k8z476b2t"/><path class="jteu77bhb"/><path class="vz1gykbsn"/><path class="r5ui-rboh"/></g>`,
		"fallback": "pepicons:expand",
	});
}

export default Component;
