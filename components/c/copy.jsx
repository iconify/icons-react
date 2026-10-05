import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/k/kcy563a9w.css';
import '../../css/c/cyfp_5tmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="kcy563a9w"/><path class="cyfp_5tmy"/></g>`,
		"fallback": "matita:copy",
	});
}

export default Component;
