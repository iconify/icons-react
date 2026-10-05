import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/b/blt9mhbec.css';
import '../../css/o/omoia8byb.css';
import '../../css/z/zgztdpbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="blt9mhbec"/><path class="omoia8byb"/><path class="zgztdpbiy"/></g>`,
		"fallback": "matita:hash",
	});
}

export default Component;
