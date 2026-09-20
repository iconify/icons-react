import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4omlmbfc.css';
import '../../css/w/w2abumm4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4omlmbfc"/><path class="w2abumm4u"/></g>`,
		"fallback": "si:briefcases-duotone",
	});
}

export default Component;
