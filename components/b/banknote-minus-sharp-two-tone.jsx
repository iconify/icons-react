import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/lzr69co-j.css';
import '../../css/f/fn3tkcbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="lzr69co-j"/><path class="fn3tkcbof"/></g>`,
		"fallback": "keyline-icons:banknote-minus-sharp-two-tone",
	});
}

export default Component;
