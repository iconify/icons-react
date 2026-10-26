import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_y2kibug.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_y2kibug"/>`,
		"fallback": "doodle-icons:ellipsis",
	});
}

export default Component;
