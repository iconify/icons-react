import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fyr67fbfm.css';
import '../../css/e/e_wor2bbs.css';
import '../../css/l/lm7otu1mj.css';
import '../../css/b/bu-wc30dp.css';
import '../../css/g/gvinp5b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fyr67fbfm"/><path class="e_wor2bbs"/><path class="lm7otu1mj"/><path class="bu-wc30dp"/><path class="gvinp5b1p"/></g>`,
		"fallback": "solar:flash-drive-broken",
	});
}

export default Component;
