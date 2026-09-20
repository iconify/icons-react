import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hzqbmrzrz.css';
import '../../css/c/cn26qdbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hzqbmrzrz"/><path class="cn26qdbjw"/></g>`,
		"fallback": "streamline-freehand:e-commerce-cart-laptop",
	});
}

export default Component;
