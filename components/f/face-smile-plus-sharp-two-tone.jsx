import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x1f6uobqa.css';
import '../../css/t/tvgeq3bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x1f6uobqa"/><path class="tvgeq3bie"/></g>`,
		"fallback": "keyline-icons:face-smile-plus-sharp-two-tone",
	});
}

export default Component;
