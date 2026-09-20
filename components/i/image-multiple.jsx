import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zevuvru3q.css';
import '../../css/g/gi44p62aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zevuvru3q"/><path clip-rule="evenodd" class="gi44p62aw"/></g>`,
		"fallback": "majesticons:image-multiple",
	});
}

export default Component;
