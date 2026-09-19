import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yd7z4-b9k.css';
import '../../css/y/yo8cmopuc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yd7z4-b9k"/><path class="yo8cmopuc"/></g>`,
		"fallback": "hugeicons:hard-drive-upload",
	});
}

export default Component;
