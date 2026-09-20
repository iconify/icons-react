import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/emajh7b1l.css';
import '../../css/t/ty62gxbpt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="emajh7b1l"/><path class="ty62gxbpt"/></g>`,
		"fallback": "streamline-color:facebook-1-flat",
	});
}

export default Component;
