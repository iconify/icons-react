import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx5d-bc1s.css';
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
		"content": `<g class="nx5d-bc1s"><path class="boywt1bng"/><path class="rebbjcb_v"/></g>`,
		"fallback": "thesvg-color:flux-black-forest-labs",
	});
}

export default Component;
