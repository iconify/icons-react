import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nt3_83b3e.css';
import '../../css/x/x21nwybgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nt3_83b3e"/><path class="x21nwybgk"/></g>`,
		"fallback": "streamline-sharp-color:airplane-disabled-flat",
	});
}

export default Component;
