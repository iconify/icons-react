import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m5md0gb6l.css';
import '../../css/t/tl_x59b9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m5md0gb6l"/><path class="tl_x59b9b"/></g>`,
		"fallback": "heroicons:cog-6-tooth",
	});
}

export default Component;
