import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wd39qiwhy.css';
import '../../css/m/mn-eum1fs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wd39qiwhy"/><path class="mn-eum1fs"/>`,
		"fallback": "solar:branching-paths-up-bold-duotone",
	});
}

export default Component;
