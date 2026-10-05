import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/m/mca4zbboh.css';
import '../../css/e/ey28qh55f.css';
import '../../css/q/qx29uub7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="mca4zbboh"/><path class="ey28qh55f"/><path class="qx29uub7b"/></g>`,
		"fallback": "matita:info",
	});
}

export default Component;
