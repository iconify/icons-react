import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhk4ll00z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhk4ll00z"/>`,
		"fallback": "energy-icons:equal-48",
	});
}

export default Component;
