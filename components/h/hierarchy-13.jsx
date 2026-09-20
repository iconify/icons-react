import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rp8opuzcq.css';
import '../../css/d/dzr354eyi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rp8opuzcq"/><path class="dzr354eyi"/></g>`,
		"fallback": "streamline-flex-color:hierarchy-13",
	});
}

export default Component;
