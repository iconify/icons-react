import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r59r6dbsl.css';
import '../../css/m/mrhstnbrs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r59r6dbsl"/><path class="mrhstnbrs"/></g>`,
		"fallback": "flowbite:cart-plus-solid",
	});
}

export default Component;
