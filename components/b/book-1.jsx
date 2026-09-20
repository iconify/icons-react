import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x33a2fb3q.css';
import '../../css/b/b3ikrzbhg.css';
import '../../css/h/h52lkaysi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="x33a2fb3q"/><path class="b3ikrzbhg"/><path class="h52lkaysi"/></g>`,
		"fallback": "streamline-plump-color:book-1",
	});
}

export default Component;
