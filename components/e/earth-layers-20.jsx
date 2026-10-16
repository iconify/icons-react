import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5l2hstxs.css';
import '../../css/y/yub7c6b0d.css';
import '../../css/g/g6wu-497r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5l2hstxs"/><path class="yub7c6b0d"/><path class="g6wu-497r"/>`,
		"fallback": "energy-icons:earth-layers-20",
	});
}

export default Component;
