import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sv88ewnzg.css';
import '../../css/e/em_q5npjq.css';
import '../../css/s/sma5kmzjd.css';
import '../../css/j/j82radcbq.css';
import '../../css/u/uc-epbbwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sv88ewnzg"/><path class="em_q5npjq"/><path class="sma5kmzjd"/><circle class="j82radcbq"/><path class="uc-epbbwo"/></g>`,
		"fallback": "solar:columns-3-cog-line-duotone",
	});
}

export default Component;
