import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz0bikexj.css';
import '../../css/a/an2--ubjc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz0bikexj"/><path class="an2--ubjc"/>`,
		"fallback": "cil:border-outer",
	});
}

export default Component;
