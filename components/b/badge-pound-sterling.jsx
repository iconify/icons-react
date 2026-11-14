import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vw8ljybdn.css';
import '../../css/e/eliwlw23c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vw8ljybdn"/><path class="eliwlw23c"/></g>`,
		"fallback": "hugeicons:badge-pound-sterling",
	});
}

export default Component;
