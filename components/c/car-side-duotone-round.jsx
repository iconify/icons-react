import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isvey_b9m.css';
import '../../css/u/u9ghn-evg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="isvey_b9m"/><path class="u9ghn-evg"/></g>`,
		"fallback": "coolicons:car-side-duotone-round",
	});
}

export default Component;
