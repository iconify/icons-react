import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s70hfm3ku.css';
import '../../css/u/uchlo0spv.css';
import '../../css/r/rzlr-4bci.css';
import '../../css/c/cvx1a_b9x.css';
import '../../css/v/vp1emv83y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s70hfm3ku"/><path class="uchlo0spv"/><path class="rzlr-4bci"/><path class="cvx1a_b9x"/><path class="vp1emv83y"/></g>`,
		"fallback": "streamline-ultimate-color:envelope-letter",
	});
}

export default Component;
