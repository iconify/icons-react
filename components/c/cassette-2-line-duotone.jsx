import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ea90dub6v.css';
import '../../css/j/jfupqcmxc.css';
import '../../css/i/ij6svbbbz.css';
import '../../css/b/bpu2-0jzs.css';
import '../../css/n/nlq80plvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ea90dub6v"/><path class="jfupqcmxc"/><path class="ij6svbbbz"/><path class="bpu2-0jzs"/><rect class="nlq80plvu"/></g>`,
		"fallback": "solar:cassette-2-line-duotone",
	});
}

export default Component;
