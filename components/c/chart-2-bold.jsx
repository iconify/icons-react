import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mqtg_nbsi.css';
import '../../css/p/pwz0xh32h.css';
import '../../css/c/ch3uuungx.css';
import '../../css/l/lewhcjbdn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mqtg_nbsi"/><path class="pwz0xh32h"/><path class="ch3uuungx"/><path class="lewhcjbdn"/></g>`,
		"fallback": "solar:chart-2-bold",
	});
}

export default Component;
