import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/h3b5zyq_o.css';
import '../../css/j/jwn9yibsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="h3b5zyq_o"/><path class="jwn9yibsk"/></g>`,
		"fallback": "streamline-ultimate:checkup-diagnostic",
	});
}

export default Component;
