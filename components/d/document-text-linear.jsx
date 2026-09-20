import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/r-do9_buf.css';
import '../../css/x/xn4zvpbmt.css';
import '../../css/l/lhx-r4bhy.css';
import '../../css/s/sgjshnbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="r-do9_buf"/><path class="xn4zvpbmt"/><path class="lhx-r4bhy"/><path class="sgjshnbod"/></g>`,
		"fallback": "solar:document-text-linear",
	});
}

export default Component;
