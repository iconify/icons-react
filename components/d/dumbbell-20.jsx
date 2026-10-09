import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srpjfu9ek.css';
import '../../css/f/f1fczmbyr.css';
import '../../css/g/g6145_v8p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srpjfu9ek"/><path class="f1fczmbyr"/><path class="g6145_v8p"/>`,
		"fallback": "energy-icons:dumbbell-20",
	});
}

export default Component;
