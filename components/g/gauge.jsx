import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z7nalfl1j.css';
import '../../css/j/jtpy8fbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z7nalfl1j"/><path class="jtpy8fbmr"/></g>`,
		"fallback": "reicon:gauge",
	});
}

export default Component;
