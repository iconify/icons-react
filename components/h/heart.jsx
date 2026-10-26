import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1y8vagqs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u1y8vagqs"/>`,
		"fallback": "doodle-icons:heart",
	});
}

export default Component;
