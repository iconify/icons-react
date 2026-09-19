import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xjr5sxboz.css';
import '../../css/d/dktk3630t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xjr5sxboz"/><path class="dktk3630t"/></g>`,
		"fallback": "hugeicons:archive-04",
	});
}

export default Component;
