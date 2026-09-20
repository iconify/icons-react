import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fa7nocbur.css';
import '../../css/p/p39k-2awn.css';
import '../../css/s/sy-bnbbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fa7nocbur"/><path class="p39k-2awn"/><path class="sy-bnbbuw"/></g>`,
		"fallback": "tdesign:image-search",
	});
}

export default Component;
