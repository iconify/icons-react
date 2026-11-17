import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xkhonfb1e.css';
import '../../css/g/gy_lnt_-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="xkhonfb1e"/><path class="gy_lnt_-n"/></g>`,
		"fallback": "matita:badge-check",
	});
}

export default Component;
