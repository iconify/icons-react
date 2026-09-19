import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wwm7e5bjt.css';
import '../../css/v/vfar9mhjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wwm7e5bjt"/><path class="vfar9mhjw"/></g>`,
		"fallback": "hugeicons:aspect-ratio",
	});
}

export default Component;
