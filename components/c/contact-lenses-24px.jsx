import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g7kr-7jon.css';
import '../../css/v/vcr9qs2qn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="g7kr-7jon"/><path class="vcr9qs2qn"/></g>`,
		"fallback": "healthicons:contact-lenses-24px",
	});
}

export default Component;
