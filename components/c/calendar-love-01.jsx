import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vgosehbak.css';
import '../../css/h/h26ylurvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vgosehbak"/><path class="h26ylurvq"/></g>`,
		"fallback": "hugeicons:calendar-love-01",
	});
}

export default Component;
