import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p82bg5uit.css';
import '../../css/s/shsnm5blf.css';
import '../../css/y/yiub7sneg.css';
import '../../css/f/fp-yz8bmv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p82bg5uit"/><path class="shsnm5blf"/><path class="yiub7sneg"/><path class="fp-yz8bmv"/></g>`,
		"fallback": "tdesign:attic",
	});
}

export default Component;
