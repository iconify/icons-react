import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/ln862-baf.css';
import '../../css/p/p5dy8sbfb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ln862-baf"/><path class="p5dy8sbfb"/></g>`,
		"fallback": "hugeicons:cayan-tower",
	});
}

export default Component;
