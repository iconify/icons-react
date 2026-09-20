import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kvrqj2bhp.css';
import '../../css/c/cn9g78_of.css';
import '../../css/u/u3k6hobsn.css';
import '../../css/v/vdr2_oflg.css';
import '../../css/p/pp9_a_bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kvrqj2bhp"/><path class="cn9g78_of"/><path class="u3k6hobsn"/><path class="vdr2_oflg"/><path class="pp9_a_bcx"/></g>`,
		"fallback": "solar:asteroid-linear",
	});
}

export default Component;
