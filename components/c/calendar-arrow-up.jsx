import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hf2g79b3c.css';
import '../../css/c/cub0dwbvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hf2g79b3c"/><path class="cub0dwbvl"/></g>`,
		"fallback": "hugeicons:calendar-arrow-up",
	});
}

export default Component;
