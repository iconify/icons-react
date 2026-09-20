import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pirn0_bio.css';
import '../../css/n/n7c4a2awt.css';
import '../../css/n/nkg6ymbnc.css';
import '../../css/d/daleh4b4i.css';
import '../../css/z/zcwku4x5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pirn0_bio"/><path class="n7c4a2awt"/><path class="nkg6ymbnc"/><path class="daleh4b4i"/><path class="zcwku4x5u"/></g>`,
		"fallback": "solar:cart-large-bold-duotone",
	});
}

export default Component;
