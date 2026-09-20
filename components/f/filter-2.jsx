import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cfxjvzb8q.css';
import '../../css/x/x1kdd3bji.css';
import '../../css/b/b6eynkbex.css';
import '../../css/n/nuw1jpblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cfxjvzb8q"/><path class="x1kdd3bji"/><path class="b6eynkbex"/><path class="nuw1jpblt"/></g>`,
		"fallback": "tdesign:filter-2",
	});
}

export default Component;
