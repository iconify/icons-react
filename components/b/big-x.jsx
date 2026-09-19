import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvilx1q3c.css';
import '../../css/o/oaj3dytkx.css';
import '../../css/p/p4n8c8b1o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="kvilx1q3c"><path class="oaj3dytkx"/><path class="p4n8c8b1o"/></g>`,
		"fallback": "icon-park:big-x",
	});
}

export default Component;
