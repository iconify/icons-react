import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wyuor8b1i.css';
import '../../css/k/klm28w1do.css';
import '../../css/e/eioo6acwy.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wyuor8b1i"/><path class="klm28w1do"/><path class="eioo6acwy"/></g>`,
		"fallback": "flagpack:cg",
	});
}

export default Component;
