import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq6y9ctxn.css';
import '../../css/n/nazq8_bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gq6y9ctxn"/><path class="nazq8_bnr"/>`,
		"fallback": "solar:copy-check-bold",
	});
}

export default Component;
