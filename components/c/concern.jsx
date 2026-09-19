import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to5_hpm1w.css';
import '../../css/o/ofckze7dz.css';
import '../../css/h/hys1agb-t.css';
import '../../css/b/bfiby-bqi.css';
import '../../css/y/yn45t_bmk.css';
import '../../css/k/k-r1p1blr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to5_hpm1w"><path class="ofckze7dz"/><path class="hys1agb-t"/><path class="bfiby-bqi"/><path class="yn45t_bmk"/><path class="k-r1p1blr"/></g>`,
		"fallback": "icon-park:concern",
	});
}

export default Component;
