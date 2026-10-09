import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay_tk8c1e.css';
import '../../css/l/lg77w-bbs.css';
import '../../css/a/aq913o2sy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay_tk8c1e"/><path class="lg77w-bbs"/><path class="aq913o2sy"/>`,
		"fallback": "energy-icons:crystal-20-bold",
	});
}

export default Component;
