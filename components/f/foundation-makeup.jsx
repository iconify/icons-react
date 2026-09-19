import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/y/ya5nrxbvg.css';
import '../../css/e/ekbjwf-nk.css';
import '../../css/c/cvw46tbed.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="ya5nrxbvg"/><rect class="ekbjwf-nk"/><path class="cvw46tbed"/></g>`,
		"fallback": "icon-park:foundation-makeup",
	});
}

export default Component;
