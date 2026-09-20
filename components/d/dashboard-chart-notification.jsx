import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lm2y_hbzh.css';
import '../../css/k/kiph3vb6t.css';
import '../../css/x/x40pc3c5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="lm2y_hbzh"/><path class="kiph3vb6t"/><path class="x40pc3c5r"/></g>`,
		"fallback": "mage:dashboard-chart-notification",
	});
}

export default Component;
