import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dfp3vlhyg.css';
import '../../css/q/q4br58bfd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dfp3vlhyg"/><path class="q4br58bfd"/></g>`,
		"fallback": "tabler:hearts-off",
	});
}

export default Component;
