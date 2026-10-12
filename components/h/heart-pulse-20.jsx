import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2zh3obzl.css';
import '../../css/u/upem778kj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2zh3obzl"/><path class="upem778kj"/>`,
		"fallback": "energy-icons:heart-pulse-20",
	});
}

export default Component;
