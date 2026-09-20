import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s9p_wjb9z.css';
import '../../css/i/ir2gpebqr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="s9p_wjb9z"/><path class="ir2gpebqr"/></g>`,
		"fallback": "streamline-sharp-color:google-drive-flat",
	});
}

export default Component;
