import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/t/t60lkutxt.css';
import '../../css/m/m7_8x_ghe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="t60lkutxt"/><path class="m7_8x_ghe"/></g>`,
		"fallback": "streamline-sharp-color:health-care-2",
	});
}

export default Component;
