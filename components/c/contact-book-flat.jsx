import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sn9pucclr.css';
import '../../css/i/i_gzl-bhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sn9pucclr"/><path clip-rule="evenodd" class="i_gzl-bhv"/></g>`,
		"fallback": "streamline-sharp-color:contact-book-flat",
	});
}

export default Component;
