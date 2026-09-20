import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/x/x6nzs8bfh.css';
import '../../css/v/vvtxee9sq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="x6nzs8bfh"/><path class="vvtxee9sq"/></g>`,
		"fallback": "streamline-plump:hot-spring",
	});
}

export default Component;
