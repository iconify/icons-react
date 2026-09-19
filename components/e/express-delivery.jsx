import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/b/b3d8bdqux.css';
import '../../css/t/tye31zn0w.css';
import '../../css/b/bj4z4zz1e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="b3d8bdqux"/><path class="tye31zn0w"/><path class="bj4z4zz1e"/></g>`,
		"fallback": "icon-park-outline:express-delivery",
	});
}

export default Component;
