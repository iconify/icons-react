import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwoubej7v.css';
import '../../css/h/hcb6vpbff.css';
import '../../css/v/vp91a6bdu.css';
import '../../css/a/afq-scbon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGfhIGhbnB"><path class="uwoubej7v"/></clipPath></defs><g clip-path="url(#SVGfhIGhbnB)" transform="translate(0 75.1)scale(.853)"><path class="hcb6vpbff"/><path class="vp91a6bdu"/><path class="afq-scbon"/></g>`,
		"fallback": "flag:cd-1x1",
	});
}

export default Component;
