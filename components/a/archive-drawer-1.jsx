import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ualmj68fj.css';
import '../../css/z/ztwn49cwd.css';
import '../../css/f/fn08j-b6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ualmj68fj"/><path class="ztwn49cwd"/><path class="fn08j-b6r"/></g>`,
		"fallback": "streamline-freehand-color:archive-drawer-1",
	});
}

export default Component;
