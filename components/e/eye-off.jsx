import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ll4-n--4o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ll4-n--4o"/>`,
		"fallback": "doodle-icons:eye-off",
	});
}

export default Component;
