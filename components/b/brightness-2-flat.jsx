import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jfgk029jb.css';
import '../../css/g/gklvhw6py.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jfgk029jb"/><path class="gklvhw6py"/></g>`,
		"fallback": "streamline-color:brightness-2-flat",
	});
}

export default Component;
