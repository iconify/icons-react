import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djhwg7uhq.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/k/k45eambmw.css';
import '../../css/k/k6kjogsnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="djhwg7uhq"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="k45eambmw"/><path class="k6kjogsnf"/></g>`,
		"fallback": "icon-park:add-picture",
	});
}

export default Component;
