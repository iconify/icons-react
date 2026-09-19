import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jr3bsib-a.css';
import '../../css/e/e-ty3sknj.css';
import '../../css/u/utjknldjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jr3bsib-a"/><path class="e-ty3sknj"/><path class="utjknldjz"/></g>`,
		"fallback": "hugeicons:arrow-up-az",
	});
}

export default Component;
