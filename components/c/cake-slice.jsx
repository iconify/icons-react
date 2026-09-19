import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bnef_pb8w.css';
import '../../css/n/n2wyxqbbe.css';
import '../../css/f/f6r1adbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="bnef_pb8w"/><path class="n2wyxqbbe"/><path class="f6r1adbsy"/></g>`,
		"fallback": "hugeicons:cake-slice",
	});
}

export default Component;
