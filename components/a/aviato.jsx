import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i8_wgcx8k.css';
import '../../css/t/t1ypfb_hf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i8_wgcx8k"/><path class="t1ypfb_hf"/>`,
		"fallback": "selfhst:aviato",
	});
}

export default Component;
