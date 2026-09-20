import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hywnp76ti.css';
import '../../css/m/mv5cgu9lq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hywnp76ti"/><path class="mv5cgu9lq"/></g>`,
		"fallback": "tdesign:component-layout",
	});
}

export default Component;
