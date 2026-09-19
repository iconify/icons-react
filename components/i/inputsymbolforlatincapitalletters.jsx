import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub82tgj1c.css';
import '../../css/e/espyn4ruh.css';
import '../../css/q/qai7w9c7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub82tgj1c"/><path class="espyn4ruh"/><path class="qai7w9c7x"/>`,
		"fallback": "fxemoji:inputsymbolforlatincapitalletters",
	});
}

export default Component;
