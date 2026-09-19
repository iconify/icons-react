import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djhwg7uhq.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/q/q-k5diqdf.css';
import '../../css/l/l_233-b5x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djhwg7uhq"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="q-k5diqdf"/><path class="l_233-b5x"/></g>`,
		"fallback": "icon-park:down-picture",
	});
}

export default Component;
