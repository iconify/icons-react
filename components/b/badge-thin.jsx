import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/e/e77174b8r.css';
import '../../css/l/lyt4ixbwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="e77174b8r"/><path class="lyt4ixbwg"/></g>`,
		"fallback": "iconamoon:badge-thin",
	});
}

export default Component;
