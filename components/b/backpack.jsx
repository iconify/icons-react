import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o0d9nyb_m.css';
import '../../css/h/hlobg2enq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="o0d9nyb_m"/><path class="hlobg2enq"/></g>`,
		"fallback": "lucide:backpack",
	});
}

export default Component;
