import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/axuvhdcbd.css';
import '../../css/u/ut2pamj4a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="axuvhdcbd"/><path class="ut2pamj4a"/></g>`,
		"fallback": "streamline-color:arrow-cursor-1",
	});
}

export default Component;
