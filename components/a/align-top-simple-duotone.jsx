import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mazs-kwdj.css';
import '../../css/b/bzwl6-b_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mazs-kwdj"/><path class="bzwl6-b_r"/></g>`,
		"fallback": "si:align-top-simple-duotone",
	});
}

export default Component;
