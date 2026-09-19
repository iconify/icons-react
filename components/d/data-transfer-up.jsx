import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq04ipdji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq04ipdji"/>`,
		"fallback": "cil:data-transfer-up",
	});
}

export default Component;
