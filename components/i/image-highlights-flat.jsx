import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wg98_ubzf.css';
import '../../css/z/zjqxzo7kc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wg98_ubzf"/><path class="zjqxzo7kc"/></g>`,
		"fallback": "streamline-sharp-color:image-highlights-flat",
	});
}

export default Component;
