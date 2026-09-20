import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dyw__vszl.css';
import '../../css/g/g68ulccwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dyw__vszl"/><path class="g68ulccwx"/></g>`,
		"fallback": "tdesign:component-switch",
	});
}

export default Component;
