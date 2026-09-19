import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/e/ehipm2b3p.css';
import '../../css/d/d26v317vg.css';
import '../../css/k/kp7mr8b2k.css';
import '../../css/d/d64x45bya.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="ehipm2b3p"/><g class="d26v317vg"><path class="kp7mr8b2k"/><path class="d64x45bya"/></g></g>`,
		"fallback": "cryptocurrency-color:hpb",
	});
}

export default Component;
