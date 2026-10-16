import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km_1fum4q.css';
import '../../css/s/s45evebmk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km_1fum4q"/><path class="s45evebmk"/>`,
		"fallback": "energy-icons:heating-schedule-48",
	});
}

export default Component;
