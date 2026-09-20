import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fo6a01bwp.css';
import '../../css/d/d5_5_rn9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fo6a01bwp"/><path class="d5_5_rn9o"/></g>`,
		"fallback": "streamline-sharp-color:diagonal-scroll-1-flat",
	});
}

export default Component;
