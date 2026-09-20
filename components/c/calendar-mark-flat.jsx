import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xk230irwd.css';
import '../../css/p/p_gbbybxh.css';
import '../../css/g/gi5y9nmlg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xk230irwd"/><path class="p_gbbybxh"/><path clip-rule="evenodd" class="gi5y9nmlg"/></g>`,
		"fallback": "streamline-plump-color:calendar-mark-flat",
	});
}

export default Component;
