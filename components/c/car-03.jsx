import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nln6-ubsj.css';
import '../../css/l/ls6g0vb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nln6-ubsj"/><path class="ls6g0vb1x"/></g>`,
		"fallback": "hugeicons:car-03",
	});
}

export default Component;
