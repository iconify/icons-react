import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uivl3zvjf.css';
import '../../css/n/nw07p3n6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uivl3zvjf"/><path class="nw07p3n6r"/></g>`,
		"fallback": "tdesign:gesture-expansion",
	});
}

export default Component;
