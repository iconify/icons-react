import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyc2ucc0u.css';
import '../../css/p/p5l_j20jg.css';
import '../../css/i/ia6bwytul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tyc2ucc0u"/><path class="p5l_j20jg"/><path class="ia6bwytul"/></g>`,
		"fallback": "andrsrxn:cloud-sparkle",
	});
}

export default Component;
