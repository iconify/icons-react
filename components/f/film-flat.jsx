import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pbw_ex4yn.css';
import '../../css/h/hxoy3acdl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pbw_ex4yn"/><path class="hxoy3acdl"/></g>`,
		"fallback": "streamline-flex-color:film-flat",
	});
}

export default Component;
