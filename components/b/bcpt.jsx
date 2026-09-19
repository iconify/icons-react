import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs9cm2ljt.css';
import '../../css/n/n39oibjao.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="fs9cm2ljt"/><path class="n39oibjao"/></g>`,
		"fallback": "cryptocurrency-color:bcpt",
	});
}

export default Component;
