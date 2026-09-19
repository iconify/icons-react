import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/rr5l77bcq.css';
import '../../css/i/ict8_2blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="rr5l77bcq"/><path class="ict8_2blf"/></g>`,
		"fallback": "hugeicons:apple-music",
	});
}

export default Component;
