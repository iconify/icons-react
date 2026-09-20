import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8lc41ufp.css';
import '../../css/s/so_zjfb6p.css';
import '../../css/q/q98uypm1w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8lc41ufp"/><path clip-rule="evenodd" class="so_zjfb6p"/><path clip-rule="evenodd" class="q98uypm1w"/></g>`,
		"fallback": "streamline-plump-color:hard-drive-2-flat",
	});
}

export default Component;
