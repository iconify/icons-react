import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jtolhhxhq.css';
import '../../css/p/pyajm7rst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jtolhhxhq"/><path class="pyajm7rst"/></g>`,
		"fallback": "lets-icons:cloud-alt-light",
	});
}

export default Component;
