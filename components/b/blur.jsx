import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/c7xa9sbtx.css';
import '../../css/v/voorfjv1s.css';
import '../../css/l/l8hkuabxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="c7xa9sbtx"/><path class="voorfjv1s"/><path class="l8hkuabxm"/></g>`,
		"fallback": "hugeicons:blur",
	});
}

export default Component;
