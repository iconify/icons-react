import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/d/d67d1o37r.css';
import '../../css/n/nbgaetwkj.css';
import '../../css/i/ix6zqj6-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="d67d1o37r"/><path class="nbgaetwkj"/><path clip-rule="evenodd" class="ix6zqj6-v"/></g>`,
		"fallback": "keyline-icons:bug-sharp-duotone",
	});
}

export default Component;
