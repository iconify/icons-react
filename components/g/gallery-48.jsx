import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acc9x56xd.css';
import '../../css/q/qj8k73bxl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acc9x56xd"/><path class="qj8k73bxl"/>`,
		"fallback": "energy-icons:gallery-48",
	});
}

export default Component;
