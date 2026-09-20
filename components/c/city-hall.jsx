import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ge95rcb6n.css';
import '../../css/u/ufq0labsn.css';
import '../../css/j/jhgzhub8y.css';
import '../../css/o/o542_v8xh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ge95rcb6n"/><path class="ufq0labsn"/><path class="jhgzhub8y"/><path class="o542_v8xh"/></g>`,
		"fallback": "streamline-flex-color:city-hall",
	});
}

export default Component;
