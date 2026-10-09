import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y67e-ncjf.css';
import '../../css/c/cgzz0m8kb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y67e-ncjf"/><path class="cgzz0m8kb"/>`,
		"fallback": "energy-icons:caliper-48",
	});
}

export default Component;
