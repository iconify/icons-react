import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a9a5yp08a.css';
import '../../css/e/ehz0svbpm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a9a5yp08a"/><path class="ehz0svbpm"/></g>`,
		"fallback": "streamline-plump-color:arrow-cursor-move-flat",
	});
}

export default Component;
