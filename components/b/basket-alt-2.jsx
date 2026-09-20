import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eju5htbog.css';
import '../../css/k/k2qwikbxh.css';
import '../../css/h/hn_hazjoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eju5htbog"/><path clip-rule="evenodd" class="k2qwikbxh"/><path class="hn_hazjoy"/></g>`,
		"fallback": "lets-icons:basket-alt-2",
	});
}

export default Component;
