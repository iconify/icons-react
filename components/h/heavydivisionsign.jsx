import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rywc8nbcc.css';
import '../../css/m/mh7spwbcm.css';
import '../../css/l/lzxnqd56o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rywc8nbcc"/><circle class="mh7spwbcm"/><circle class="lzxnqd56o"/>`,
		"fallback": "fxemoji:heavydivisionsign",
	});
}

export default Component;
