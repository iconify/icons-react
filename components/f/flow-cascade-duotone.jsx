import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uithe1bph.css';
import '../../css/a/ar6o_4blw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uithe1bph"/><path class="ar6o_4blw"/></g>`,
		"fallback": "si:flow-cascade-duotone",
	});
}

export default Component;
