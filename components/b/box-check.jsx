import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vll101bmy.css';
import '../../css/h/hh4p4hhty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vll101bmy"/><path class="hh4p4hhty"/></g>`,
		"fallback": "andrsrxn:box-check",
	});
}

export default Component;
