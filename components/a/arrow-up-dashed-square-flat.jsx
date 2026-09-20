import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fh9jr4b3b.css';
import '../../css/m/mxp8jk6gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fh9jr4b3b"/><path class="mxp8jk6gs"/></g>`,
		"fallback": "streamline-sharp-color:arrow-up-dashed-square-flat",
	});
}

export default Component;
