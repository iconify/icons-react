import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/n_6kqbh0h.css';
import '../../css/a/aurb_obnv.css';
import '../../css/i/i-b1b9mbj.css';
import '../../css/m/mssc0fbma.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="n_6kqbh0h"/><path class="aurb_obnv"/><path class="i-b1b9mbj"/><path class="mssc0fbma"/></g>`,
		"fallback": "solar:cash-out-line-duotone",
	});
}

export default Component;
