import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d6pxcdb8b.css';
import '../../css/n/newf1ibho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="d6pxcdb8b"/><path class="newf1ibho"/></g>`,
		"fallback": "streamline-plump:dumbell",
	});
}

export default Component;
