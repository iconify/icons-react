import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ev3htzt4x.css';
import '../../css/n/n-_redqnx.css';
import '../../css/n/n_r4n_bvp.css';
import '../../css/j/jyumk6b3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ev3htzt4x"/><path class="n-_redqnx"/><path class="n_r4n_bvp"/><path class="jyumk6b3q"/></g>`,
		"fallback": "solar:chart-2-line-duotone",
	});
}

export default Component;
