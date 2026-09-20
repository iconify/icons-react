import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g8pbt_7ho.css';
import '../../css/k/k6hr5pbmw.css';
import '../../css/r/r757d9zet.css';
import '../../css/u/uslbr7byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g8pbt_7ho"/><path class="k6hr5pbmw"/><path class="r757d9zet"/><path class="uslbr7byg"/></g>`,
		"fallback": "tdesign:cheese",
	});
}

export default Component;
