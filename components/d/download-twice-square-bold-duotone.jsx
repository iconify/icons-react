import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/t/tpjpmfbne.css';
import '../../css/s/srdlptbat.css';
import '../../css/h/h_4v6zbwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="tpjpmfbne"/><path class="srdlptbat"/><path class="h_4v6zbwh"/></g>`,
		"fallback": "solar:download-twice-square-bold-duotone",
	});
}

export default Component;
