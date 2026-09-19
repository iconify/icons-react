import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gt08bxbti.css';
import '../../css/s/ssiatac2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gt08bxbti"/><path class="ssiatac2j"/></g>`,
		"fallback": "hugeicons:anchor-point",
	});
}

export default Component;
