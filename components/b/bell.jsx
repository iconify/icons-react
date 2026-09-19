import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/exltrwyti.css';
import '../../css/n/n6uc3olmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="exltrwyti"/><path class="n6uc3olmf"/></g>`,
		"fallback": "hugeicons:bell",
	});
}

export default Component;
