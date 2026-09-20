import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfx2wkbme.css';
import '../../css/a/a4-eoy1ky.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/ty0jp0byr.css';
import '../../css/z/zyiv9wvjc.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfx2wkbme"/><path class="a4-eoy1ky"/><g class="ij2x_72vy"><path class="ty0jp0byr"/><path class="zyiv9wvjc"/></g>`,
		"fallback": "openmoji:ear-medium-dark-skin-tone",
	});
}

export default Component;
