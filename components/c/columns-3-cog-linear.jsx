import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vm6ivcctg.css';
import '../../css/e/em_q5npjq.css';
import '../../css/s/sma5kmzjd.css';
import '../../css/x/xo9chq19z.css';
import '../../css/s/six-1nb9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vm6ivcctg"/><path class="em_q5npjq"/><path class="sma5kmzjd"/><circle class="xo9chq19z"/><path class="six-1nb9x"/></g>`,
		"fallback": "solar:columns-3-cog-linear",
	});
}

export default Component;
