import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veb-t1e3e.css';
import '../../css/r/rlbc0qbau.css';
import '../../css/q/qhozfjjix.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="veb-t1e3e"/><path class="rlbc0qbau"/><path class="qhozfjjix"/>`,
		"fallback": "energy-icons:heat-flow-20-bold",
	});
}

export default Component;
