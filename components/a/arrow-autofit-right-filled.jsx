import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lb7c3hbjm.css';
import '../../css/i/i6p0z6krc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lb7c3hbjm"/><path class="i6p0z6krc"/></g>`,
		"fallback": "tabler:arrow-autofit-right-filled",
	});
}

export default Component;
