import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/odtya-b3r.css';
import '../../css/w/w_1d0j57s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="odtya-b3r"/><path class="w_1d0j57s"/></g>`,
		"fallback": "hugeicons:axe",
	});
}

export default Component;
