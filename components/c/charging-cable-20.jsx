import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9gesab3q.css';
import '../../css/q/qbvrdcndr.css';
import '../../css/e/ebvsrm49p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9gesab3q"/><path class="qbvrdcndr"/><path class="ebvsrm49p"/>`,
		"fallback": "energy-icons:charging-cable-20",
	});
}

export default Component;
