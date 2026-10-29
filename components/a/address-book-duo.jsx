import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/at20z_l8q.css';
import '../../css/p/p568vbblp.css';
import '../../css/c/coff_0a1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="at20z_l8q"/><path class="p568vbblp wm-a"/><path class="coff_0a1c"/></g>`,
		"fallback": "withicons:address-book-duo",
	});
}

export default Component;
