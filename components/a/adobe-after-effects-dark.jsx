import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qefm_s0ny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qefm_s0ny"/>`,
		"fallback": "selfhst:adobe-after-effects-dark",
	});
}

export default Component;
