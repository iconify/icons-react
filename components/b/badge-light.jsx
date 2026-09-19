import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/deus58iom.css';
import '../../css/w/w-d57vb8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="deus58iom"/><path class="w-d57vb8f"/></g>`,
		"fallback": "iconamoon:badge-light",
	});
}

export default Component;
