import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr-gbkbpm.css';
import '../../css/l/l3f3ah6-k.css';
import '../../css/f/fd0qhnbkz.css';
import '../../css/y/y5yierbhk.css';
import '../../css/e/e8pcimbwa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr-gbkbpm"/><path class="l3f3ah6-k"/><path class="fd0qhnbkz"/><path class="y5yierbhk"/><path class="e8pcimbwa"/>`,
		"fallback": "energy-icons:ev-charging-hub-20",
	});
}

export default Component;
