import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt3hhu20u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt3hhu20u"/>`,
		"fallback": "doodle-icons:chevron-down",
	});
}

export default Component;
