import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/faixfyb0g.css';
import '../../css/y/ytpnlk6ox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="faixfyb0g"/><path class="ytpnlk6ox"/></g>`,
		"fallback": "hugeicons:calendar-block-01",
	});
}

export default Component;
