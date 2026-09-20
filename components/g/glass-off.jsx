import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/im1-27jtp.css';
import '../../css/j/j14j34bgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="im1-27jtp"/><path class="j14j34bgp"/></g>`,
		"fallback": "tabler:glass-off",
	});
}

export default Component;
