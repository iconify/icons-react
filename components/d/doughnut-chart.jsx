import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuqwgmbol.css';
import '../../css/s/sg2hhebqo.css';
import '../../css/a/ahkvt_bqj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuqwgmbol"/><path class="sg2hhebqo"/><path class="ahkvt_bqj"/>`,
		"fallback": "flat-color-icons:doughnut-chart",
	});
}

export default Component;
