import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/q/qi287dm-m.css';
import '../../css/o/okw2lfwbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path clip-rule="evenodd" class="qi287dm-m"/><path class="okw2lfwbs"/></g>`,
		"fallback": "keyline-icons:image-x-sharp-fill",
	});
}

export default Component;
