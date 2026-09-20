import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dbgvcxwad.css';
import '../../css/o/o-w-gbbnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="dbgvcxwad"/><path class="o-w-gbbnp"/></g>`,
		"fallback": "proicons:do-not-disturb",
	});
}

export default Component;
