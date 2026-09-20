import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lv9ybmxyl.css';
import '../../css/d/dtde8reig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lv9ybmxyl"/><path class="dtde8reig"/></g>`,
		"fallback": "keyline-icons:flag-duotone",
	});
}

export default Component;
