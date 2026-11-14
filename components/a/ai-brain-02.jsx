import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dl8atjbdm.css';
import '../../css/b/bgsw0kbxi.css';
import '../../css/p/pvr89p5ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dl8atjbdm"/><path class="bgsw0kbxi"/><path class="pvr89p5ys"/></g>`,
		"fallback": "hugeicons:ai-brain-02",
	});
}

export default Component;
