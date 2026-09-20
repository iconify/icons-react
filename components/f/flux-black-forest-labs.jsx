import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/boywt1bng.css';
import '../../css/r/rebbjcb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="boywt1bng"/><path class="rebbjcb_v"/></g>`,
		"fallback": "thesvg:flux-black-forest-labs",
	});
}

export default Component;
