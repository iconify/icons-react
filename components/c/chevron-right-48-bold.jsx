import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8gtx7ddi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8gtx7ddi"/>`,
		"fallback": "energy-icons:chevron-right-48-bold",
	});
}

export default Component;
