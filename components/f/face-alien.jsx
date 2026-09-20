import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j64hijs9c.css';
import '../../css/w/w_b0q1jfm.css';
import '../../css/y/yw4qdubuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j64hijs9c"/><path class="w_b0q1jfm"/><path class="yw4qdubuz"/></g>`,
		"fallback": "lucide-lab:face-alien",
	});
}

export default Component;
