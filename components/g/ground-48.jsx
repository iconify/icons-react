import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejop8g90f.css';
import '../../css/j/jqoq2wbcp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejop8g90f"/><path class="jqoq2wbcp"/>`,
		"fallback": "energy-icons:ground-48",
	});
}

export default Component;
