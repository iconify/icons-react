import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4lhl3b6q.css';
import '../../css/l/lfzfbp_8d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4lhl3b6q"/><path class="lfzfbp_8d"/>`,
		"fallback": "energy-icons:ground-loop-20-bold",
	});
}

export default Component;
