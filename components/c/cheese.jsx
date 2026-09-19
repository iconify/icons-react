import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r_7qjkbzn.css';
import '../../css/k/k85br_uei.css';
import '../../css/i/i6fc0ub0z.css';
import '../../css/o/o583s-bfl.css';
import '../../css/x/xue57cp9s.css';
import '../../css/c/c__jvurrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r_7qjkbzn"/><path class="k85br_uei"/><circle class="i6fc0ub0z"/><circle class="o583s-bfl"/><circle class="xue57cp9s"/><circle class="c__jvurrs"/></g>`,
		"fallback": "icon-park:cheese",
	});
}

export default Component;
