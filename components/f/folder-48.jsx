import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb9x9-c_l.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb9x9-c_l"/>`,
		"fallback": "energy-icons:folder-48",
	});
}

export default Component;
