import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_5mkzbsi.css';
import '../../css/r/r-81zlrts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_5mkzbsi"/><path clip-rule="evenodd" class="r-81zlrts"/></g>`,
		"fallback": "streamline-sharp-color:inbox-post-flat",
	});
}

export default Component;
