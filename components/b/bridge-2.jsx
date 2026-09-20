import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q200p4b2m.css';
import '../../css/c/cpolwub9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q200p4b2m"/><path class="cpolwub9s"/></g>`,
		"fallback": "tdesign:bridge-2",
	});
}

export default Component;
