import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2hr5sbai.css';
import '../../css/y/yvjkteb0g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2hr5sbai"/><path class="yvjkteb0g"/>`,
		"fallback": "energy-icons:corner-up-right-48-bold",
	});
}

export default Component;
