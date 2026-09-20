import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/cjw43km3x.css';
import '../../css/f/f6tgfew3u.css';
import '../../css/z/zkglr3x2x.css';
import '../../css/l/l5mj12bgx.css';
import '../../css/e/ebv-q-bhi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="cjw43km3x"/><path class="f6tgfew3u"/><path class="zkglr3x2x"/><path class="l5mj12bgx"/><path class="ebv-q-bhi"/></g>`,
		"fallback": "solar:chef-hat-linear",
	});
}

export default Component;
