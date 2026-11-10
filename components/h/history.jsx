import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/qmvubpbbm.css';
import '../../css/m/meuu3vbcy.css';
import '../../css/x/x0r8z9v_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="qmvubpbbm"/><path class="meuu3vbcy"/><path class="x0r8z9v_n"/></g>`,
		"fallback": "matita:history",
	});
}

export default Component;
