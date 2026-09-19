import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7bnrcbqn.css';
import '../../css/n/ncl-bp61j.css';
import '../../css/k/k4liqx2ro.css';
import '../../css/l/lxy1vnbki.css';
import '../../css/t/t5fhah78y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y7bnrcbqn"/><path class="ncl-bp61j"/><path class="k4liqx2ro"/><path class="lxy1vnbki"/><path class="t5fhah78y"/></g>`,
		"fallback": "icon-park:error-picture",
	});
}

export default Component;
