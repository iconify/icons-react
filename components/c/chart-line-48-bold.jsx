import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpel3hezc.css';
import '../../css/h/h31m63bsk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpel3hezc"/><path class="h31m63bsk"/>`,
		"fallback": "energy-icons:chart-line-48-bold",
	});
}

export default Component;
