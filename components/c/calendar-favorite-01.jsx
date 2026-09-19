import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/faixfyb0g.css';
import '../../css/w/ws5rw9bla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="faixfyb0g"/><path class="ws5rw9bla"/></g>`,
		"fallback": "hugeicons:calendar-favorite-01",
	});
}

export default Component;
