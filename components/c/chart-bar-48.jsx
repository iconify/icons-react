import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9l2qqe6j.css';
import '../../css/b/bkiex1byg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9l2qqe6j"/><path class="bkiex1byg"/>`,
		"fallback": "energy-icons:chart-bar-48",
	});
}

export default Component;
