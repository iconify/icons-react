import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cx3cpnbfk.css';

const viewBox = {"width":760,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cx3cpnbfk"/>`,
		"fallback": "il:github",
	});
}

export default Component;
