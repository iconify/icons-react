import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/z/z-datbeqm.css';
import '../../css/c/cjy01ac5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="z-datbeqm"/><path class="cjy01ac5e"/></g>`,
		"fallback": "matita:heart",
	});
}

export default Component;
