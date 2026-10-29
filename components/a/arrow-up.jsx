import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ebfe2acus.css';
import '../../css/d/d2ecqac4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ebfe2acus"/><path class="d2ecqac4y wm-a"/></g>`,
		"fallback": "withicons:arrow-up",
	});
}

export default Component;
