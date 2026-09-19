import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_h3ksw7p.css';
import '../../css/d/dr4olufdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_h3ksw7p"/><path class="dr4olufdn"/>`,
		"fallback": "boxicons:arrow-out-up-right-stroke-circle-filled",
	});
}

export default Component;
