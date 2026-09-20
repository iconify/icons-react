import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-c_0jb9x.css';
import '../../css/m/mvq0l2g9f.css';
import '../../css/i/i_t2hddxy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y-c_0jb9x"/><path class="mvq0l2g9f"/><path class="i_t2hddxy"/></g>`,
		"fallback": "streamline-plump-color:gallery-2-flat",
	});
}

export default Component;
