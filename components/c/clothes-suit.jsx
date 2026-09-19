import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/r14m0_bwd.css';
import '../../css/u/u9_1s46cx.css';
import '../../css/n/nx184z37n.css';
import '../../css/x/x_pultk6y.css';
import '../../css/f/fojq0r_ej.css';
import '../../css/s/sq9tz90tm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="r14m0_bwd"/><path class="u9_1s46cx"/><path class="nx184z37n"/><path class="x_pultk6y"/><path class="fojq0r_ej"/><path class="sq9tz90tm"/></g>`,
		"fallback": "icon-park:clothes-suit",
	});
}

export default Component;
