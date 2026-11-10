import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l082cbbuf.css';
import '../../css/q/qkesom0jb.css';
import '../../css/b/b80sudb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l082cbbuf"/><path class="qkesom0jb"/><path class="b80sudb3i"/></g>`,
		"fallback": "andrsrxn:device-pc-warning",
	});
}

export default Component;
