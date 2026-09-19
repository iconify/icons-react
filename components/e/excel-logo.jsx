import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0evq45wm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d0evq45wm"/>`,
		"fallback": "healthicons:excel-logo",
	});
}

export default Component;
