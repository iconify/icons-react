import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a8xel1b0w.css';
import '../../css/x/xyxipfb_h.css';
import '../../css/b/btvmlsfwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a8xel1b0w"/><path class="xyxipfb_h"/><path class="btvmlsfwv"/></g>`,
		"fallback": "streamline-freehand-color:download-harddrive-1",
	});
}

export default Component;
