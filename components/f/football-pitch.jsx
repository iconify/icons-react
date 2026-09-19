import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s46wx2bmy.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/h_f5w3-ut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="s46wx2bmy"/><circle class="h_tsn8bxt"/><path class="h_f5w3-ut"/></g>`,
		"fallback": "hugeicons:football-pitch",
	});
}

export default Component;
