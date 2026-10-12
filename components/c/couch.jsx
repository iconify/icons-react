import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bc_tq0a-b.css';
import '../../css/g/gl477rbyy.css';
import '../../css/n/nxyuhmb6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bc_tq0a-b"/><path class="gl477rbyy"/><path class="nxyuhmb6i"/></g>`,
		"fallback": "andrsrxn:couch",
	});
}

export default Component;
