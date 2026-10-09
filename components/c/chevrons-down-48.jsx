import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xgbrg5b8n.css';
import '../../css/c/cw3c7_bbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xgbrg5b8n"/><path class="cw3c7_bbg"/>`,
		"fallback": "energy-icons:chevrons-down-48",
	});
}

export default Component;
