import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejx2y1bzf.css';
import '../../css/s/s605fxbhp.css';
import '../../css/f/fvrnvdc0s.css';
import '../../css/n/neb4kjwuq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejx2y1bzf"/><path class="s605fxbhp"/><path class="fvrnvdc0s"/><path class="neb4kjwuq"/>`,
		"fallback": "solar:cloud-waterdrops-bold-duotone",
	});
}

export default Component;
