import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rewug1ppt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rewug1ppt"/>`,
		"fallback": "energy-icons:cloud-drizzle-48",
	});
}

export default Component;
