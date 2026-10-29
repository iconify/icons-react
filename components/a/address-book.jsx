import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/coff_0a1c.css';
import '../../css/p/p568vbblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="coff_0a1c"/><path class="p568vbblp wm-a"/></g>`,
		"fallback": "withicons:address-book",
	});
}

export default Component;
