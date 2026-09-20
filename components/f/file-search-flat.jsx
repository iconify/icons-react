import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo2hllb9t.css';
import '../../css/q/qfd72abhl.css';
import '../../css/m/m1ix09kob.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qo2hllb9t"/><path class="qfd72abhl"/><path class="m1ix09kob"/></g>`,
		"fallback": "streamline-plump-color:file-search-flat",
	});
}

export default Component;
