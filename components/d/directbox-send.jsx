import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p68wimf2h.css';
import '../../css/v/vdi0_mbjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="p68wimf2h"/><path class="vdi0_mbjo"/></g>`,
		"fallback": "reicon:directbox-send",
	});
}

export default Component;
