import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l2x696bfp.css';
import '../../css/e/e147rjfmh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l2x696bfp"/><path class="e147rjfmh"/></g>`,
		"fallback": "keyline-icons:delete-sharp-two-tone",
	});
}

export default Component;
