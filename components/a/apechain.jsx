import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgp891b0n.css';
import '../../css/k/kh5naitwa.css';
import '../../css/g/g1t4b6brm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGdTsR8dtt)"><path class="wgp891b0n"/><path class="kh5naitwa"/></g><defs><clipPath id="SVGdTsR8dtt"><path class="g1t4b6brm"/></clipPath></defs></g>`,
		"fallback": "token:apechain",
	});
}

export default Component;
