import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h71ionbqe.css';
import '../../css/p/p6xpfabix.css';
import '../../css/w/wmraxtywx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h71ionbqe"/><path class="p6xpfabix"/><path class="wmraxtywx"/></g>`,
		"fallback": "streamline-kameleon-color:baseball-pop",
	});
}

export default Component;
